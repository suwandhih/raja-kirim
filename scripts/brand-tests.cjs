'use strict';

// Node/VM unit tests with small API doubles; no browser or external provider is started.
const assert = require('node:assert/strict');
const { Script } = require('node:vm');

function declaration(source, name) {
  const match = source.match(new RegExp(`^function ${name}\\([^\\n]*\\) \\{[\\s\\S]*?^\\}`, 'm'));
  assert(match, `Missing function ${name}`);
  return match[0];
}

module.exports = function checkBrand(sources) {
  const literalColour = /#[\da-f]{3,8}\b|\brgba?\s*\(/i;
  for (const [file, source] of sources) {
    if ((file.endsWith('.css') || file.endsWith('.js')) && file !== 'src/styles/design-tokens.css') {
      assert(!literalColour.test(source), `${file}: use token colours, including runtime exports`);
    }
  }

  const raja = sources.get('raja-kirim/index.html');
  for (const label of ['↗ Ekspor', 'Dari Indonesia', '↙ Impor', 'Ke Indonesia', 'Bandingkan harga →', 'Daftar pelanggan →']) {
    assert(raja.includes(label), `Comparison control missing: ${label}`);
  }
  assert.match(raja, /<button\b[^>]*type="submit"[^>]*>Bandingkan harga →<\/button>/);
  assert.match(raja, /href="surat\.html#pelanggan">Daftar pelanggan →<\/a>/);
  assert.doesNotMatch(raja, /href="\.\.\/(?!src\/styles\/)/, 'Raja Kirim tidak boleh menautkan keluar ke situs lain');
  for (const id of ['origin', 'destination']) {
    assert.match(raja, new RegExp(`<label\\b[^>]*id="${id}-label"[^>]*for="${id}"`), `${id}: label dinamis harus terhubung ke select`);
    const select = raja.match(new RegExp(`<select\\b[^>]*id="${id}"[^>]*>`))?.[0];
    assert(select && !/aria-label=/.test(select), `${id}: nama aksesibel harus mengikuti label yang terlihat`);
  }
  assert.match(raja, /<p id="results-note" class="results-note bc-muted">/);
  const prices = sources.get('raja-kirim/harga.js');
  assert.match(prices, /<strong class="price">[\s\S]*?<\/strong><small class="price-idr bc-muted">≈ /, 'Perkiraan Rupiah harus kecil dan tepat di bawah harga USD');
  assert.match(prices, /<details>[\s\S]*?<summary>Rincian biaya<\/summary>/);
  assert.match(raja, /id="offers"[^>]*role="radiogroup"[^>]*aria-label="Pilih ekspedisi"/);
  assert.match(raja, /↑ Diurutkan dari harga terendah · klik kartu untuk memilih/);
  assert.match(raja, /<p id="selection-summary" aria-live="polite" aria-atomic="true">/);
  assert.match(prices, /<label class="offer-choice-label" for="offer-\$\{index\}"><input class="offer-choice" type="radio" name="offer"/);
  assert.match(prices, /aria-describedby="offer-difference-\$\{index\}"/);
  assert.match(prices, /Keunggulan contoh \(simulasi\)/);

  assert.match(raja, /<h1 id="hero-title">Pengiriman lebih pasti\.<\/h1>/);
  assert.match(raja, /class="intro-link bc-btn bc-btn--lg bc-btn--pill" href="#form-title">Mulai bandingkan ↘/);
  assert.match(raja, /class="search-card comparison-planner bc-card bc-card--raised"/);
  assert.match(raja, /class="next bc-card"/);
  assert.match(raja, /<button id="create-quotation" class="bc-btn bc-btn--accent bc-btn--lg" type="button" aria-describedby="selection-summary quotation-status">Buat surat penawaran →<\/button>/);
  assert.match(raja, /id="quotation-status" class="bc-alert" role="alert"/);
  assert.equal((raja.match(/class="bc-tile"/g) || []).length, 2);
  assert.equal((raja.match(/aria-current="page"/g) || []).length, 1);
  for (const link of ['index.html', 'kalkulator.html', 'surat.html#pelanggan', 'surat.html']) {
    const navigation = raja.match(/<nav\b[^>]*>[\s\S]*?<\/nav>/)?.[0];
    assert(navigation && navigation.includes(`href="${link}"`), `Navigasi perbandingan harus berupa tautan nyata: ${link}`);
  }

  const pageCSS = sources.get('raja-kirim/harga.css');
  const scopeMarker = '/* Design C comparison-only overrides.';
  assert(pageCSS.includes(scopeMarker), 'Aturan Desain C harus terpisah dari CSS kalkulator');
  const scopedCSS = pageCSS.slice(pageCSS.indexOf(scopeMarker)).replace(/\/\*[\s\S]*?\*\//g, '');
  const rules = [...scopedCSS.matchAll(/([^{}]+)\{([^{}]*)\}/g)];
  assert(rules.length >= 20, 'Pemeriksaan harus mencakup seluruh aturan Desain C');
  for (const [, selectors] of rules) {
    assert(selectors.split(',').every((selector) => selector.trim().startsWith('body.comparison-page ')), `Aturan bocor ke halaman lain: ${selectors.trim()}`);
  }
  assert.match(scopedCSS, /body\.comparison-page \.offers\s*\{\s*grid-template-columns: repeat\(3, minmax\(0, 1fr\)\)/, 'Desktop 1280px: tiga kolom');
  assert.match(scopedCSS, /@media \(max-width: 850px\)\s*\{\s*body\.comparison-page \.offers\s*\{ grid-template-columns: minmax\(0, 1fr\); \}/, 'Ponsel 390px: satu kolom');
  assert.match(scopedCSS, /@media \(max-width: 850px\)[\s\S]*?body\.comparison-page \.intro-card \{ display: none; \}/);
  assert.match(scopedCSS, /body\.comparison-page \.comparison-planner\s*\{\s*margin-top: -64px;/);
  assert.match(scopedCSS, /body\.comparison-page \.offer-data \.price-idr \{ display: block;/);
  assert.match(scopedCSS, /body\.comparison-page \.offer summary \{[^}]*min-height: 44px;/);
  assert.match(scopedCSS, /body\.comparison-page \.fields \.bc-select,[\s\S]*?min-height: 52px;/);
  assert.match(scopedCSS, /body\.comparison-page \.comparison-hero :focus-visible \{ outline-color: var\(--brand-white\); \}/);
  assert.match(scopedCSS, /@media \(prefers-reduced-motion: reduce\)[\s\S]*?transition: none;/);
  assert.match(scopedCSS, /body\.comparison-page \.next\.bc-card \{[^}]*background: var\(--brand-accent\);/);
  assert.match(scopedCSS, /width: var\(--offer-share\);/);
  assert.doesNotMatch(scopedCSS, /\.offer--best\b/, 'Penekanan visual mengikuti pilihan, bukan selalu termurah');
  assert.match(scopedCSS, /body\.comparison-page \.offer--selected \{[^}]*border-color: var\(--brand-primary\);[^}]*background: color-mix\(in srgb, var\(--brand-secondary\) 35%, var\(--brand-card\)\);/);
  assert.match(scopedCSS, /body\.comparison-page \.offer--selected \.offer-meter > span \{ background: var\(--brand-primary\); \}/);
  assert.match(scopedCSS, /body\.comparison-page \.offer:has\(\.offer-choice:focus-visible\) \{ outline: 3px solid var\(--brand-primary\); outline-offset: 4px; \}/);
  assert.match(scopedCSS, /body\.comparison-page \.offer-choice:focus-visible \+ span \{ outline: 3px solid var\(--brand-primary\);/);
  assert.match(scopedCSS, /body\.comparison-page \.offer-choice-label \{[^}]*min-height: 44px;[^}]*cursor: pointer;/);
  assert.match(scopedCSS, /body\.comparison-page \.offer \{[^}]*cursor: pointer;/);
  const radioRule = rules.find(([, selectors]) => selectors.trim() === 'body.comparison-page .offer-choice')?.[2];
  assert(radioRule && radioRule.includes('clip-path: inset(50%)'));
  assert.doesNotMatch(radioRule, /display:\s*none|visibility:\s*hidden/, 'Radio tersembunyi visual harus tetap dapat difokuskan');
  assert.match(scopedCSS, /body\.comparison-page \.offer-selection\[hidden\] \{ display: none; \}/);
  assert.match(scopedCSS, /body\.comparison-page \.offer-benefits ul \{[^}]*color: var\(--brand-muted-foreground\);/);
  assert.match(scopedCSS, /body\.comparison-page \.offer-difference \{[^}]*color: var\(--brand-muted-foreground\);/);
  assert.match(scopedCSS, /body\.comparison-page #selection-summary \{[^}]*overflow-wrap: anywhere;/);

  // Compute contrast from the actual managed tokens and sRGB gradient stops.
  const tokenCSS = sources.get('src/styles/design-tokens.css');
  const colour = (name) => {
    const value = tokenCSS.match(new RegExp(`--${name}:\\s*(#[\\da-f]{6});`, 'i'))?.[1];
    assert(value, `Token warna tidak ditemukan: ${name}`);
    return [1, 3, 5].map((offset) => Number.parseInt(value.slice(offset, offset + 2), 16));
  };
  const mix = (a, b, weight) => a.map((channel, i) => channel * weight + b[i] * (1 - weight));
  const luminance = (channels) => channels.map((channel) => {
    const value = channel / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  }).reduce((sum, channel, i) => sum + channel * [0.2126, 0.7152, 0.0722][i], 0);
  const heroRule = rules.find(([, selectors]) => selectors.trim() === 'body.comparison-page .comparison-hero')?.[2];
  assert(heroRule && heroRule.includes('linear-gradient(115deg in srgb,'));
  const stops = [...heroRule.matchAll(/color-mix\(in srgb, var\(--(brand-[\w-]+)\) (\d+)%, var\(--(brand-[\w-]+)\)\)/g)]
    .map(([, a, percentage, b]) => mix(colour(a), colour(b), Number(percentage) / 100));
  assert.equal(stops.length, 2);
  const white = luminance(colour('brand-white'));
  const contrasts = Array.from({ length: 101 }, (_, i) => (white + 0.05) / (luminance(mix(stops[0], stops[1], i / 100)) + 0.05));
  assert(contrasts.every((contrast) => contrast >= 4.5), 'Teks putih pada seluruh gradasi hero harus memenuhi WCAG AA');
  console.log(`OK Desain C: urutan/navigasi, CSS terisolasi, breakpoint 1280/390, fokus/target sentuh/reduced motion, kontras hero minimal ${Math.min(...contrasts).toFixed(2)}:1 (bukan uji render browser).`);

  // Keep generated and static controls on the same shared primitives.
  for (const file of ['index.html', 'raja-kirim/index.html', 'raja-kirim/kalkulator.html', 'raja-kirim/surat.html', 'raja-kirim/surat.js']) {
    const source = sources.get(file);
    const classes = [...source.matchAll(/(?:class="|className = ')([^"'\n]+)["']/g)].map(match => match[1].split(/\s+/));
    for (const names of classes) {
      if (names.includes('button')) assert(names.includes('bc-btn'), `${file}: legacy action is missing bc-btn`);
    }
  }
  assert.match(sources.get('raja-kirim/kalkulator.js'), /element\('button', 'button primary bc-btn bc-btn--primary'/);

  const tokens = new Map(Object.entries({
    'brand-primary': 'rebeccapurple',
    'brand-muted-foreground': 'slategray',
    'brand-foreground': 'midnightblue',
    'brand-white': 'ivory',
    'brand-accent': 'peachpuff',
    'brand-accent-foreground': 'maroon',
    'font-sans': 'Test Sans, sans-serif',
    'font-display': 'Test Display, sans-serif'
  }));
  const getComputedStyle = () => ({
    getPropertyValue(name) {
      const key = name.slice(2);
      assert(tokens.has(key), `Unknown token ${name}`);
      return ` ${tokens.get(key)} `;
    }
  });


  const makeNode = tag => ({ tag, children: [], append(...nodes) { this.children.push(...nodes); } });
  const statuses = [];
  const printTokens = new Map();
  const printDoc = {
    documentElement: { style: { setProperty(name, value) { printTokens.set(name, value); } } },
    head: makeNode('head'), body: makeNode('body'), createElement: makeNode
  };
  let printed = 0;
  let popupAllowed = true;
  let canvasAvailable = true;
  let downloaded = false;
  const drawing = [];
  const context = {
    measureText(text) { return { width: text.length * 12 }; },
    fillRect(...coords) { drawing.push({ kind: 'rect', colour: this.fillStyle, coords }); },
    fillText(text) { drawing.push({ kind: 'text', colour: this.fillStyle, font: this.font, text }); }
  };
  const canvas = {
    getContext() { return canvasAvailable ? context : null; },
    toDataURL(type) { assert.equal(type, 'image/png'); return 'data:image/png,unit-test'; }
  };
  const link = { click() { downloaded = true; } };
  const cloned = { kind: 'cloned content' };
  const content = {
    innerText: 'Contoh tanda terima\n' + 'panjang'.repeat(100),
    cloneNode(deep) { assert.equal(deep, true); return cloned; }
  };
  const customer = { id: 'contoh', nama: 'Pelanggan contoh' };
  const surat = sources.get('raja-kirim/surat.js');
  const exportSandbox = {
    getComputedStyle, content, customer,
    document: {
      documentElement: {},
      createElement(tag) { return tag === 'canvas' ? canvas : link; }
    },
    window: { open() { return popupAllowed ? { document: printDoc, focus() {}, print() { printed += 1; } } : null; } },
    $: () => ({}),
    setStatus(node, message, error = false) { statuses.push({ message, error }); }
  };
  const functions = ['brandValue', 'exportPDF', 'exportPNG'].map(name => declaration(surat, name)).join('\n');
  new Script(functions + '\nexportPDF(customer, content); exportPNG(customer, content);').runInNewContext(exportSandbox, { timeout: 1000 });
  assert.equal(printed, 1);
  assert.equal(printTokens.size, 8);
  for (const [name, value] of printTokens) assert.equal(value, tokens.get(name.slice(2)));
  const printCSS = printDoc.head.children[0].textContent;
  assert.match(printCSS, /background:var\(--brand-white\)/);
  assert.match(printCSS, /@media print\{[\s\S]*header,small,mark\{color:inherit\}mark\{background:transparent\}/);
  assert.equal(printDoc.body.children[1].children[0], cloned);
  assert.equal(drawing[0].colour, tokens.get('brand-white'));
  assert(drawing.some(item => item.kind === 'text' && item.colour === tokens.get('brand-primary') && item.font.includes(tokens.get('font-display'))));
  assert(drawing.some(item => item.kind === 'text' && item.colour === tokens.get('brand-foreground') && item.font.includes(tokens.get('font-sans'))));
  assert(canvas.height > 420, 'Long receipt text expands the canvas');
  assert(downloaded);
  assert.equal(link.download, 'tanda-terima-contoh-simulasi.png');
  assert(statuses.every(status => !status.error));

  // The snapshot remains self-contained, while subsequent exports read current tokens.
  tokens.set('brand-primary', 'darkviolet');
  drawing.length = 0;
  new Script('exportPNG(customer, content);').runInNewContext(exportSandbox, { timeout: 1000 });
  assert(drawing.some(item => item.colour === 'darkviolet'));
  assert.equal(printTokens.get('--brand-primary'), 'rebeccapurple');
  popupAllowed = false;
  canvasAvailable = false;
  new Script('exportPDF(customer, content); exportPNG(customer, content);').runInNewContext(exportSandbox, { timeout: 1000 });
  assert(statuses.slice(-2).every(status => status.error), 'Keep blocked-popup/canvas error feedback');
  assert.match(surat, /command === 'hiliteColor' \? brandValue\('brand-accent'\) : null/);

  // Exercise the same generated toolbar for message and template editors without a browser.
  const toolbarNode = tag => ({
    tag, children: [], attributes: {}, listeners: {},
    append(child) { this.children.push(child); },
    setAttribute(name, value) { this.attributes[name] = value; },
    addEventListener(name, handler) { this.listeners[name] = handler; }
  });
  const editorIds = ['mail-body', 'template-editor'];
  const toolbars = editorIds.map(id => Object.assign(toolbarNode('div'), { dataset: { editor: id } }));
  const focused = [];
  const inputEvents = [];
  const editorNodes = new Map(editorIds.map(id => [id, Object.assign(toolbarNode('div'), {
    focus() { focused.push(id); },
    dispatchEvent(event) { inputEvents.push({ id, type: event.type, bubbles: event.bubbles }); }
  })]));
  const executed = [];
  const toolbarStart = surat.indexOf('const toolbarGroups = [');
  const toolbarEnd = surat.indexOf('\nfunction activateTab(', toolbarStart);
  assert(toolbarStart >= 0 && toolbarEnd > toolbarStart, 'Toolbar setup must be present');
  new Script(declaration(surat, 'brandValue') + '\n' + surat.slice(toolbarStart, toolbarEnd)).runInNewContext({
    Event, getComputedStyle,
    $: id => editorNodes.get(id),
    document: {
      documentElement: {},
      querySelectorAll(selector) { assert.equal(selector, '.toolbar'); return toolbars; },
      createElement: toolbarNode,
      execCommand(command, showUI, value) { executed.push({ command, showUI, value }); }
    }
  }, { timeout: 1000 });
  const expectedCommands = ['bold', 'italic', 'insertUnorderedList', 'insertOrderedList', 'hiliteColor'];
  const expectedLabels = ['Tebal', 'Miring', 'Daftar berpoin', 'Daftar bernomor', 'Sorot teks'];
  for (const [i, toolbar] of toolbars.entries()) {
    assert.equal(toolbar.attributes.role, 'group');
    assert.deepEqual(toolbar.children.map(group => group.attributes['aria-label']), ['Gaya teks', 'Daftar', 'Penyorotan']);
    assert.deepEqual(toolbar.children.map(group => group.children.length), [2, 2, 1]);
    const buttons = toolbar.children.flatMap(group => group.children);
    buttons.forEach((button, index) => {
      assert.equal(button.type, 'button');
      assert.match(button.className, /bc-btn bc-btn--ghost toolbar-button/);
      assert.equal(button.attributes['aria-label'], expectedLabels[index]);
      assert.equal(button.title, expectedLabels[index]);
      assert.match(button.innerHTML, /^<svg width="20" height="20" viewBox="0 0 24 24"/);
      assert.match(button.innerHTML, /aria-hidden="true" focusable="false"/);
      assert.doesNotMatch(button.innerHTML, /<text\b|<script\b/);
      let prevented = false;
      button.listeners.mousedown({ preventDefault() { prevented = true; } });
      assert(prevented, 'Pointer activation must preserve the text selection');
      button.listeners.click();
      assert.deepEqual(executed.at(-1), {
        command: expectedCommands[index], showUI: false,
        value: index === 4 ? tokens.get('brand-accent') : null
      });
      assert.equal(focused.at(-1), editorIds[i]);
      assert.deepEqual(inputEvents.at(-1), { id: editorIds[i], type: 'input', bubbles: true });
    });
  }
  assert.equal(executed.length, 10);
  assert.equal(inputEvents.length, 10);
  const editorCSS = sources.get('raja-kirim/surat.css');
  assert.match(editorCSS, /\.toolbar \{[^}]*flex-wrap: wrap;[^}]*align-items: center;[^}]*gap: 8px;/);
  assert.match(editorCSS, /\.toolbar-group \{[^}]*display: inline-flex;[^}]*flex: 0 0 auto;/);
  assert.match(editorCSS, /\.toolbar \.toolbar-button \{[^}]*width: 44px;[^}]*height: 44px;[^}]*padding: 0;/);
  assert.match(editorCSS, /\.toolbar-button svg \{[^}]*width: 20px;[^}]*height: 20px;/);
  assert.match(editorCSS, /\.toolbar \.toolbar-button:focus-visible \{ outline-offset: -3px; \}/);
  console.log('OK toolbar: 2 editors, 3 groups, 10 labelled vector buttons, selection preservation, commands and input events; fixed icon/touch-target CSS (Node/VM, no browser).');
  console.log('OK Bright Cargo: token-only public CSS/JS, shared actions, comparison controls, standalone print tokens, PNG colours/fonts and export errors (Node/VM, no browser).');
};
