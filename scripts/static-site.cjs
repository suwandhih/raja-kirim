'use strict';

// Build/check tooling only. The application remains plain browser JavaScript.
const assert = require('node:assert/strict');
const { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, unlinkSync } = require('node:fs');
const path = require('node:path');
const { Script } = require('node:vm');
const checkCalculator = require('./kalkulator-tests.cjs');
const checkQuotation = require('./penawaran-tests.cjs');
const checkBrand = require('./brand-tests.cjs');
const checkCustomers = require('./pelanggan-tests.cjs');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
const files = [
  'index.html',
  'src/styles/design-tokens.css',
  'src/styles/brand.css',
  'lintas-samudra/index.html',
  'lintas-samudra/styles.css',
  'lintas-samudra/app.js',
  'lintas-samudra/data.json',
  'raja-kirim/index.html',
  'raja-kirim/harga.css',
  'raja-kirim/harga.js',
  'raja-kirim/kalkulator.html',
  'raja-kirim/kalkulator.js',
  'raja-kirim/kalkulator.css',
  'raja-kirim/tarif-contoh.js',
  'raja-kirim/penawaran.js',
  'raja-kirim/pelanggan.js',
  'raja-kirim/surat.html',
  'raja-kirim/surat.css',
  'raja-kirim/surat.js'
];

function localTarget(file, reference) {
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(reference)) return null;
  const target = new URL(reference, `https://static.invalid/${file}`);
  const relative = decodeURIComponent(target.pathname).slice(1);
  assert(files.includes(relative), `${file}: referensi di luar berkas situs: ${reference}`);
  return { file: relative, hash: target.hash };
}

function check() {
  const serverConfig = JSON.parse(readFileSync(path.join(root, 'serve.json'), 'utf8'));
  assert.equal(serverConfig.directoryListing, false, 'Daftar direktori harus dinonaktifkan');
  assert.deepEqual(serverConfig.cleanUrls, ['/', '/raja-kirim', '/lintas-samudra'], 'Resolusi indeks hanya untuk direktori situs; pertahankan URL .html');
  assert.equal(serverConfig.trailingSlash, true, 'URL direktori harus memakai garis miring agar aset relatif benar');
  const sources = new Map(files.map((file) => [file, readFileSync(path.join(root, file), 'utf8')]));
  let references = 0;
  for (const [file, source] of sources) {
    if (file.endsWith('.js')) new Script(source, { filename: file });
    if (file.endsWith('.html')) {
      assert.match(source, /<!doctype html>/i, `${file}: doctype HTML tidak tersedia`);
      assert.match(source, /<html\b[^>]*lang="id"/i, `${file}: bahasa halaman harus dipertahankan`);
      const localStyles = [...source.matchAll(/<link\b[^>]*rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/g)]
        .map((match) => localTarget(file, match[1]))
        .filter(Boolean)
        .map((target) => target.file);
      assert.deepEqual(localStyles.slice(0, 2), ['src/styles/design-tokens.css', 'src/styles/brand.css'], `${file}: token dan brand harus dimuat sebelum CSS halaman`);
      const ids = [...source.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
      assert.equal(new Set(ids).size, ids.length, `${file}: ID HTML duplikat`);
      for (const match of source.matchAll(/\b(?:src|href)="([^"]+)"/g)) {
        const target = localTarget(file, match[1]);
        if (!target) {
          if (match[1].startsWith('#')) {
            assert(ids.includes(match[1].slice(1)), `${file}: tautan bagian tidak ditemukan: ${match[1]}`);
          }
          continue;
        }
        references += 1;
        if (target.hash) {
          const customerTab = target.file === 'raja-kirim/surat.html' && target.hash === '#pelanggan'
            && sources.get('raja-kirim/surat.js').includes("location.hash === '#pelanggan'");
          const documentTab = target.file === 'raja-kirim/surat.html' && target.hash === '#dokumen'
            && sources.get('raja-kirim/surat.js').includes("location.hash === '#dokumen'");
          assert(customerTab || documentTab || sources.get(target.file).includes(`id="${target.hash.slice(1)}"`), `${file}: bagian tujuan tidak ditemukan`);
        }
      }
    }
    if (file.endsWith('.css')) {
      for (const match of source.matchAll(/url\(\s*['"]?([^'"\s)]+)['"]?\s*\)/g)) localTarget(file, match[1]);
    }
  }
  const brand = sources.get('src/styles/brand.css');
  assert(!/#[\da-f]{3,8}\b|\brgba?\s*\(/i.test(brand), 'CSS brand harus memakai token warna, bukan hex/rgb');
  for (const primitive of ['skip', 'header', 'nav', 'btn', 'card', 'badge', 'alert', 'label', 'select', 'tiles', 'tile', 'eyebrow', 'muted', 'num', 'visually-hidden']) {
    assert(brand.includes(`.bc-${primitive}`), `CSS brand: primitif bc-${primitive} tidak tersedia`);
  }
  assert(brand.includes(':checked + span') && brand.includes(':focus-visible + span'), 'Tile radio harus memiliki status pilihan dan fokus keyboard');
  assert(brand.includes('prefers-reduced-motion: reduce'), 'Transisi brand harus menghormati reduced motion');
  const home = sources.get('index.html');
  const lintas = sources.get('lintas-samudra/index.html');
  const raja = sources.get('raja-kirim/index.html');
  assert.match(home, /<meta http-equiv="refresh" content="0; url=raja-kirim\/">/, 'Halaman utama harus langsung mengarah ke Raja Kirim');
  assert.match(home, /href="raja-kirim\/index\.html"/, 'Tautan cadangan Raja Kirim tidak tersedia');
  assert.doesNotMatch(home, /Pilih perjalanan Anda|DUA HALAMAN EKSPEDISI|Pilihan halaman/, 'Halaman utama tidak boleh lagi menjadi menu pilihan situs');
  assert.match(lintas, /href="\.\.\/raja-kirim\/index\.html"/, 'Navigasi ke Raja Kirim tidak tersedia');
  for (const file of ['raja-kirim/index.html', 'raja-kirim/kalkulator.html', 'raja-kirim/surat.html']) {
    assert.doesNotMatch(sources.get(file), /href="\.\.\/(?:lintas-samudra\/index\.html|index\.html)"/, `${file}: navigasi Raja Kirim harus berdiri sendiri`);
    assert.match(sources.get(file), /href="surat\.html#pelanggan">Daftar pelanggan<\/a>/, `${file}: daftar pelanggan harus mudah diakses`);
  }
  const comparisonSections = ['<header', 'Mode demo.', 'comparison-hero', 'comparison-planner', 'class="results"', 'class="next bc-card"', '<footer'];
  let previousSection = -1;
  for (const section of comparisonSections) {
    const position = raja.indexOf(section);
    assert(position > previousSection, `Perbandingan harga: urutan bagian tidak sesuai: ${section}`);
    previousSection = position;
  }
  assert.match(raja, /href="#konten">Langsung ke konten<\/a>/);
  assert.match(raja, /id="konten"[^>]*tabindex="-1"/, 'Target skip link harus dapat menerima fokus');
  assert.match(raja, /href="#form-title">Mulai bandingkan ↘<\/a>/);
  assert.match(raja, /id="form-title"[^>]*tabindex="-1"/);
  assert.match(raja, /<div class="intro-card" aria-hidden="true">/);
  assert.match(raja, /aria-current="page" href="index\.html"/);
  assert.match(raja, /href="surat\.html#pelanggan"/);
  assert.match(raja, /<button id="create-quotation" class="bc-btn bc-btn--accent bc-btn--lg" type="button"[^>]*>Buat surat penawaran →<\/button>/);
  assert.match(raja, /id="quotation-status"[^>]*role="alert"[^>]*hidden/);
  assert.match(raja, /href="surat\.html">Surat &amp; dokumen<\/a>/, 'Navigasi dokumen tetap tersedia');
  assert.match(raja, /<script defer src="tarif-contoh\.js"><\/script>\s*<script defer src="penawaran\.js"><\/script>\s*<script defer src="harga\.js"><\/script>/, 'Modul data dan penawaran harus dimuat sebelum perbandingan');
  for (const [id, label] of [['origin', 'Negara asal'], ['destination', 'Negara tujuan'], ['mode', 'MODA PENGIRIMAN']]) {
    assert(raja.includes(`for="${id}">${label}</label>`), `${id}: label kontrol harus dipertahankan`);
  }
  assert.match(raja, /name="direction" value="ekspor" checked/);
  assert.match(raja, /name="direction" value="impor"/);
  assert.match(raja, /id="offers"[^>]*aria-live="polite"/);
  for (const file of ['raja-kirim/harga.css', 'raja-kirim/harga.js']) {
    assert(!/#[\da-f]{3,8}\b|\brgba?\s*\(/i.test(sources.get(file)), `${file}: warna harus berasal dari token`);
  }
  assert.doesNotMatch(lintas, />Pilihan halaman</, 'Navigasi Lintas Samudra tidak boleh menuju menu pilihan yang sudah dihapus');
  const data = JSON.parse(sources.get('lintas-samudra/data.json'));
  assert(Array.isArray(data.shipments) && data.shipments.length > 0, 'Data pengiriman contoh tidak tersedia');
  const shipmentIds = new Set();
  for (const shipment of data.shipments) {
    for (const field of ['id', 'referenceType', 'reference', 'mode', 'carrier', 'origin', 'destination', 'status', 'lastUpdate', 'eta', 'coordinates', 'sender', 'receiver', 'bookingStatus', 'customsExport', 'customsImport', 'tax', 'lastMile']) {
      assert.equal(typeof shipment[field], 'string', `Data pengiriman: ${field} tidak valid`);
    }
    assert(!shipmentIds.has(shipment.id), 'ID pengiriman duplikat');
    shipmentIds.add(shipment.id);
    assert(Array.isArray(shipment.events) && shipment.events.some((event) => !event.planned), 'Checkpoint aktual contoh tidak tersedia');
    for (const event of shipment.events) {
      for (const field of ['title', 'place', 'time']) assert.equal(typeof event[field], 'string', `Checkpoint: ${field} tidak valid`);
      assert(Array.isArray(event.coords) && event.coords.length === 2 && event.coords.every(Number.isFinite), 'Koordinat checkpoint tidak valid');
      assert(Math.abs(event.coords[0]) <= 180 && Math.abs(event.coords[1]) <= 90, 'Koordinat di luar batas');
    }
    assert(Array.isArray(shipment.documents), 'Daftar dokumen tidak valid');
    for (const document of shipment.documents) {
      assert.equal(typeof document.name, 'string');
      assert.equal(typeof document.status, 'string');
    }
    for (const field of ['base', 'local']) assert(Number.isFinite(shipment.invoice[field]) && shipment.invoice[field] >= 0, 'Biaya contoh tidak valid');
    assert.equal(typeof shipment.invoice.status, 'string');
    if (shipment.pod !== null) {
      for (const field of ['recipient', 'time', 'proof']) assert.equal(typeof shipment.pod[field], 'string');
    }
  }
  assert.match(sources.get('lintas-samudra/app.js'), /fetch\('data\.json(?:\?[^']*)?'\)/, 'Lokasi pemuatan data contoh berubah');
  const sandbox = { window: {} };
  new Script(sources.get('raja-kirim/tarif-contoh.js'), { filename: 'tarif-contoh.js' }).runInNewContext(sandbox, { timeout: 1000 });
  const rates = sandbox.window.RajaKirimData;
  assert(rates && Object.isFrozen(rates), 'Modul angka contoh bersama harus dibekukan');
  assert.equal(rates.countries.length, 6, 'Harus ada enam negara contoh');
  assert.equal(new Set(rates.countries).size, 6, 'Negara contoh duplikat');
  const within = (value, min, max) => Number.isFinite(value) && value >= min && value <= max;
  assert(within(rates.asuransi, 0, 100) && within(rates.kurs, Number.MIN_VALUE, Number.MAX_VALUE), 'Asuransi/kurs contoh tidak valid');
  for (const direction of ['ekspor', 'impor']) {
    for (const country of rates.countries) {
      const row = rates.rute[direction][country];
      assert(row && within(row.lokal, 0, 1000000) && within(row.bea, 0, 100) && within(row.pajak, 0, 100), `${direction}/${country}: biaya/persen tidak valid`);
      for (const mode of ['Udara', 'LCL', 'FCL']) {
        assert(within(row.tarif[mode], 0, 1000000), `${direction}/${country}/${mode}: tarif tidak valid`);
        assert(within(row.transit[mode], 1, 120) && Number.isInteger(row.transit[mode]), `${direction}/${country}/${mode}: transit tidak valid`);
      }
    }
  }
  for (const file of ['raja-kirim/index.html', 'raja-kirim/surat.html', 'raja-kirim/kalkulator.html']) {
    assert.match(sources.get(file), /<nav\b[^>]*>[\s\S]*?<a\b[^>]*href="kalkulator\.html"[^>]*>Kalkulator negara<\/a>[\s\S]*?<\/nav>/, `${file}: navigasi kalkulator tidak tersedia`);
  }
  assert.match(sources.get('raja-kirim/kalkulator.html'), /aria-current="page" href="kalkulator\.html"/, 'Navigasi kalkulator harus aktif');
  for (const [file, script] of [['raja-kirim/index.html', 'harga.js'], ['raja-kirim/kalkulator.html', 'kalkulator.js']]) {
    const tags = [...sources.get(file).matchAll(/<script\b[^>]*>/g)].map((match) => match[0]);
    assert(tags.every((tag) => /\bdefer\b/.test(tag)), `${file}: skrip harus defer`);
    assert(tags.findIndex((tag) => tag.includes('tarif-contoh.js')) < tags.findIndex((tag) => tag.includes(script)), `${file}: data harus dimuat sebelum konsumen`);
  }
  for (const [file, consumer] of [['raja-kirim/kalkulator.html', 'kalkulator.js'], ['raja-kirim/surat.html', 'surat.js']]) {
    const tags = [...sources.get(file).matchAll(/<script\b[^>]*>/g)].map((match) => match[0]);
    const order = ['tarif-contoh.js', 'penawaran.js', consumer].map((script) => tags.findIndex((tag) => tag.includes(`src="${script}"`) && /\bdefer\b/.test(tag)));
    assert(order.every((index) => index >= 0) && order[0] < order[1] && order[1] < order[2], `${file}: urutan modul penawaran/data/konsumen tidak valid`);
  }
  checkCalculator(sources, sandbox);
  checkQuotation(sources, sandbox);
  checkCustomers(sources);
  checkBrand(sources);
  const pageCount = files.filter((file) => file.endsWith('.html')).length;
  const scriptCount = files.filter((file) => file.endsWith('.js')).length;
  console.log(`OK: ${pageCount} halaman HTML, ${scriptCount} skrip JavaScript, ${references} referensi lokal, ${data.shipments.length} pengiriman contoh; navigasi situs tersedia.`);
}

function removeStaleOutput(directory) {
  if (!existsSync(directory)) return;
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) removeStaleOutput(target);
    else {
      const relative = path.relative(output, target).split(path.sep).join('/');
      if (entry.isSymbolicLink() || !files.includes(relative)) unlinkSync(target);
    }
  }
}

function build() {
  check();
  removeStaleOutput(output);
  for (const file of files) {
    const target = path.join(output, file);
    mkdirSync(path.dirname(target), { recursive: true });
    copyFileSync(path.join(root, file), target);
  }
  console.log(`OK: ${files.length} berkas statis disiapkan di dist/; tanpa backend atau kompilasi frontend.`);
}

async function verifyHttp(address) {
  assert(address, 'Masukkan alamat Preview sebagai argumen');
  const base = new URL(address);
  assert(['http:', 'https:'].includes(base.protocol), 'Alamat harus HTTP atau HTTPS');
  base.pathname = base.pathname.replace(/\/?$/, '/');
  for (const file of files) {
    const requestPath = file.endsWith('index.html') ? file.slice(0, -10) || './' : file;
    const response = await fetch(new URL(requestPath, base), { signal: AbortSignal.timeout(20000) });
    assert.equal(response.status, 200, `${file}: HTTP ${response.status}`);
    const body = await response.text();
    const expected = readFileSync(path.join(output, file), 'utf8');
    if (file.endsWith('.html')) {
      assert.match(response.headers.get('content-type') || '', /text\/html/);
      assert(body.includes(expected.match(/<title>[^<]+<\/title>/)[0]), `${file}: judul halaman tidak sesuai`);
      for (const match of expected.matchAll(/\b(?:src|href)="([^"]+\.(?:js|css))"/g)) {
        const target = localTarget(file, match[1]);
        if (!target) continue;
        const assetUrl = new URL(match[1], response.url);
        const asset = await fetch(assetUrl, { signal: AbortSignal.timeout(20000) });
        assert.equal(asset.status, 200, `${file}: aset relatif ${assetUrl.pathname} HTTP ${asset.status}`);
        assert.equal(await asset.text(), readFileSync(path.join(output, target.file), 'utf8'), `${file}: aset relatif tidak sesuai`);
        console.log(`OK aset relatif HTTP 200: ${target.file}`);
      }
    } else {
      assert.equal(body, expected, `${file}: respons tidak sesuai berkas situs`);
    }
    console.log(`OK HTTP 200: ${file}`);
  }
  for (const directory of ['raja-kirim', 'lintas-samudra']) {
    const response = await fetch(new URL(directory, base), { signal: AbortSignal.timeout(20000) });
    assert.equal(response.status, 200, `${directory}: URL direktori tanpa garis miring harus dapat dibuka`);
    assert(new URL(response.url).pathname.endsWith(`/${directory}/`), `${directory}: URL akhir harus memiliki garis miring`);
    await response.body?.cancel();
    console.log(`OK direktori kanonis HTTP 200: ${directory}/`);
  }
  for (const file of ['.git/HEAD', 'README.md', 'AGENTS.md', 'Doc/expedisi.txt', 'scripts/static-site.cjs', '.cdf/runtime.json', '.cdf-library/']) {
    const response = await fetch(new URL(file, base), { signal: AbortSignal.timeout(20000) });
    assert.equal(response.status, 404, `${file}: berkas internal tidak boleh tersedia`);
    await response.body?.cancel();
    console.log(`OK HTTP 404: ${file}`);
  }
}

async function main() {
  const action = process.argv[2];
  if (action === 'check') check();
  else if (action === 'build') build();
  else if (action === 'http') await verifyHttp(process.argv[3]);
  else throw new Error('Gunakan check, build, atau http <alamat>');
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
