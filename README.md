# Raja Kirim — Demo Ekspedisi

Frontend statis berbahasa Indonesia untuk demonstrasi Raja Kirim. Identitas, tarif, vendor, pelanggan, dokumen, dan korespondensi adalah **simulasi**. Tidak ada backend, transaksi, pembayaran, pengiriman email/WhatsApp, atau tracking. Data pelanggan dan pengaturan hanya disimpan di browser ini.

## Demo Raja Kirim
[Panduan fitur Raja Kirim](panduan-rajakirim.md)

Halaman utama (`/`) langsung mengarah ke [Raja Kirim](raja-kirim/index.html) di `/raja-kirim/`. Pengalihan memakai satu sumber halaman Raja Kirim sehingga fitur asli tidak diduplikasi. Raja Kirim memfokuskan perbandingan alternatif harga ekspor/impor serta simulasi surat dan dokumen pelanggan. Pengelolaan pelanggan menyimpan kontak dan riwayat korespondensi simulasi di penyimpanan browser lokal, yang dapat dihapus melalui pengaturan browser. Template dapat diedit dan dipratinjau per pelanggan; perubahan template hanya berlaku selama halaman terbuka. Email dan WhatsApp hanya berupa contoh tampilan: tidak ada koneksi atau pesan yang dikirim. Seluruh data dan tarif adalah fiktif, bukan penawaran aktual. Jangan masukkan data sensitif.

### Kalkulator negara

[Kalkulator negara](raja-kirim/kalkulator.html) di `/raja-kirim/kalkulator.html` membandingkan **total biaya sampai tujuan** untuk ekspor dari atau impor ke Indonesia: barang, ongkos kirim, biaya lokal, asuransi, bea masuk, dan pajak impor. Pilih satu atau lebih dari enam negara (Singapura, Malaysia, Tiongkok, Vietnam, Australia, Amerika Serikat) serta moda Udara/LCL/FCL. Hasil diurutkan dari total termurah, dengan transit, selisih, rincian USD, dan perkiraan Rupiah.

- Semua angka berlabel **DATA SIMULASI**, bukan tarif resmi, ketentuan pabean aktual, atau penawaran. Tidak ada kategori barang; sesuaikan bea contoh sendiri. Perbandingan harga vendor lama tetap tersedia dan tidak dipengaruhi pengaturan kalkulator.
- Ongkos kirim Udara = `max(kg, m³ × 167) × tarif`; LCL = `max(m³, kg/1000, 1) × tarif`; FCL = `kontainer × tarif` (bilangan bulat 1–50). Berat dan volume harus positif untuk Udara/LCL; keduanya tidak digunakan pada FCL.
- Asuransi = `(barang + kirim) × asuransi%`; CIF = barang + kirim + asuransi; bea = CIF × bea%; pajak = (CIF + bea) × pajak%; total = CIF + lokal + bea + pajak. Perhitungan berpresisi penuh; tampilan dibulatkan. Ekspor memakai bea/pajak negara tujuan. Pajak impor Indonesia sama untuk semua asal, tetapi bea contoh boleh berbeda.
- Buka **Pengaturan angka contoh** untuk mengubah tarif dan transit moda aktif, biaya lokal, bea/pajak, kurs USD→IDR, serta asuransi. Perubahan valid disimpan otomatis ke localStorage `raja-kirim-kalkulator-v1`; tidak ada riwayat perhitungan atau data formulir yang disimpan. Pengaturan hanya berlaku pada browser/origin yang sama dan dapat hilang jika penyimpanan browser dihapus.
- Bentuk dan rentang data diperiksa saat dimuat. Data rusak atau penyimpanan yang tidak tersedia memakai angka contoh disertai pesan. Jika penyimpanan penuh/diblokir, perubahan valid tetap bisa dipakai sementara tetapi tidak dianggap tersimpan. **Kembalikan angka contoh** meminta konfirmasi sebelum mengganti seluruh pengaturan kedua arah dan semua moda.
- Modul `raja-kirim/tarif-contoh.js` menyediakan `window.RajaKirimData` yang dibekukan hingga nested. Fungsi murni pada `window.RajaKirimKalkulator` memisahkan validasi/perhitungan dari render. Pengujian non-browser (`scripts/kalkulator-tests.cjs`) dijalankan oleh `check` dan `build`, termasuk rumus, urutan, penyimpanan, dan regresi 36 kombinasi harga vendor lama.

### Dari kalkulator ke surat penawaran

1. Pada hasil negara yang diinginkan, pilih **Buat surat penawaran**. Hanya satu hasil terpilih dibawa ke [tab Dokumen](raja-kirim/surat.html#dokumen), dengan jenis **Quotation / penawaran** aktif. Tidak ada riwayat perhitungan baru atau pesan yang dikirim.
2. Pilih satu atau beberapa pelanggan. Nama, perusahaan, nomor, dan tanggal tetap milik setiap pelanggan; rute, layanan (beserta deskripsi barang opsional), ukuran kiriman, total USD/≈ Rupiah, dan enam rincian biaya memakai hasil kalkulator. FCL hanya mencantumkan jumlah kontainer karena berat/volume tidak digunakan dalam perhitungannya. Banner **Data dari Kalkulator negara** menunjukkan sumbernya. Semua angka tetap simulasi, bukan tarif resmi.
3. Pilih **Pakai data contoh pelanggan** untuk menghapus hasil terpilih dan memakai kembali nilai transaksi pelanggan. Placeholder `{{rincian}}` bernilai `—` tanpa hasil kalkulator. Template quotation bawaan memuat baris rincian; template yang diedit sendiri dapat memakai placeholder tersebut.

Modul bersama `raja-kirim/penawaran.js` membuat dan memvalidasi payload versi 1 (`versi`, `arah`, `negara`, `rute`, `layanan`, `berat`, `total`, `rincian`, `dibuat` ISO). Setiap string maksimal 300 karakter. Payload disimpan ke localStorage **`raja-kirim-penawaran-v1`**, menggantikan pilihan sebelumnya, terpisah dari pengaturan kalkulator dan data pelanggan **`raja-kirim-surat-v1`**. Hasil ini adalah snapshot: perubahan angka kalkulator berikutnya tidak mengubah quotation sampai hasil baru dipilih. Payload tetap tersedia setelah muat ulang pada browser/origin yang sama sampai diganti atau dihapus.

Payload rusak diabaikan dan dihapus dengan pesan berbahasa Indonesia. Jika penyimpanan gagal/penuh, kalkulator menampilkan pesan dan tidak berpindah halaman. Bila penghapusan diblokir, data tidak dianggap telah dihapus dan pesan kegagalan ditampilkan. Penggantian hanya berlaku pada quotation dan tetap melalui sanitizer teks; template dan nilai tanda terima, kontak pelanggan, serta riwayat korespondensi tidak diubah. Pemeriksaan non-browser `scripts/penawaran-tests.cjs` mencakup payload, penyerahan/penyimpanan/reset, penggantian beberapa pelanggan, hash tab, dan sanitizer.

## Shared Bright Cargo styles

All four pages load the generated [design tokens](src/styles/design-tokens.css), then the editable [brand foundation](src/styles/brand.css), before their own stylesheets. The static build allowlists **16 public files**, including both shared stylesheets under `dist/src/styles/`. Never edit the generated tokens, Tailwind preset or managed brand assets, and do not introduce a framework for this static site.

The completed look uses one set of `bc-` primitives for skip links, headers/pill navigation, buttons, cards, badges, alerts, labels/controls and radio tiles, including actions rendered by JavaScript. Page CSS keeps layout and intentional theme/print differences, not duplicate primitives. Colours, fonts and corner radii come from the tokens; tints and shadows use `color-mix()`, with no literal hex/rgb colours in application CSS or JavaScript. Nunito and Montserrat load from Google Fonts with token system fallbacks.

Perbandingan harga follows Design C: a violet-to-tangerine hero, an overlapping planner with native Ekspor/Impor radio tiles, raised comparison cards and a soft tangerine quotation card. The calculator and documents keep their section order, content and behaviour; the root page is only an accessible redirect to Raja Kirim. The layout rules cover 1280px desktop and 390px phone widths; cards/fields stack and the wide calculator table and document tabs scroll inside their own regions.

Editor highlighting and PNG exports resolve token values for native APIs. PDF print windows copy token values and fonts locally, so they do not rely on another stylesheet request; printed headings/highlights remain readable without background printing. Radio tiles retain the native label/radio/span structure and keyboard interaction.

`npm run check` and `npm run build` run the calculator/quotation regressions plus [Bright Cargo unit checks](scripts/brand-tests.cjs) for token-only styling, shared actions, comparison controls, PDF/PNG styling and export errors. The 16-file public allowlist remains in [the build script](scripts/static-site.cjs); internal docs and test files are never copied into `dist/`. These are source checks and Node/VM tests, not browser rendering tests. Visual appearance, real browser interactions and external map/font availability were not browser-verified while Live Test was off.

## Menjalankan

Install the pinned tooling with `npm ci`, run `npm run build`, then serve only `dist/` with a static HTTP server (for example, `npx serve dist`). Buka situs melalui HTTP, bukan langsung melalui `file://`, agar perilakunya sama dengan demo publik. Semua path aplikasi bersifat relatif sehingga dapat dilayani dari subpath GitHub Pages tanpa konfigurasi build. Tidak perlu akun atau API key.

### Demo publik di GitHub Pages

[Penerbitan otomatis](.github/workflows/pages.yml) menyiapkan demo yang tetap dapat dibuka klien ketika komputer Anda dan Preview Foundry tidak aktif. Setelah penerbitan berhasil, alamat utama **https://suwandhih.github.io/raja-kirim/** langsung membuka demo Raja Kirim. Alamat ini adalah tujuan, bukan bukti bahwa versi terbaru sudah terbit.

Pengaturan satu kali oleh pemilik repositori:

1. Pastikan koneksi Foundry menuju `suwandhih/raja-kirim` sudah dikonfirmasi dan mengizinkan push. Perubahan pada `.github/workflows/` juga memerlukan izin **Workflows: Read and write** jika memakai token GitHub; masukkan token hanya melalui pengaturan koneksi, tidak melalui chat atau berkas proyek.
2. Di GitHub, buka **Settings → Pages → Build and deployment → Source**, lalu pilih **GitHub Actions**. Jangan pilih penerbitan seluruh folder akar repositori.
3. Bila lingkungan **Settings → Environments → github-pages** membatasi branch penerbitan, pemilik perlu mengizinkan `main` sesuai kebijakan repositori. Pertahankan aturan persetujuan yang ada; jangan menonaktifkan proteksi.
4. Commit dan push perubahan proyek ke `main`. Alur **Publish public demo** berjalan otomatis pada setiap push ke branch ini, bukan setiap branch. Jalankan ulang alur yang gagal setelah pengaturan diperbaiki. Tombol manual **Run workflow** juga tersedia karena workflow berada pada default branch; push tidak memerlukan tombol ini.
5. Di tab **Actions**, tunggu pekerjaan **build** dan **deploy** berhasil, lalu buka alamat dari hasil deployment **github-pages**. Push berhasil saja belum berarti situs terbaru sudah tersedia; perubahan dapat membutuhkan beberapa menit.

Build memakai Node.js `24.19.0` dan `npm ci` dengan lockfile proyek. `npm run build` menjalankan seluruh pemeriksaan serta uji Node/VM sebelum menyalin 16 berkas publik yang diizinkan. Hanya `dist/` yang diterbitkan, bukan dokumen internal, gambar lampiran, konfigurasi, kode uji, atau isi Library. Workflow memakai izin terbatas dan tidak memerlukan secret tambahan.

Penerbitan ini memperbarui satu situs Pages milik repositori: halaman akar situs langsung mengarah ke aplikasi Raja Kirim. Tautan relatif tetap bekerja di subfolder Pages. Tidak ada server milik Anda yang perlu dibiarkan menyala.

Demo bersifat publik dan tetap simulasi. Data yang dimasukkan klien hanya **disimpan di browser ini**, bukan dibagikan ke staf atau klien lain. Data dari Preview tidak berpindah otomatis karena alamat situs berbeda. Jangan memasukkan data sensitif; email/WhatsApp tetap tidak dikirim sungguhan.

### Preview di Software Foundry

Profil `node-24` digunakan hanya untuk alat pemeriksaan dan server HTTP statis `serve@14.2.8`; aplikasi tetap HTML/CSS/JavaScript asli, tanpa backend atau proses kompilasi frontend. Manifest npm hanya menambahkan alat server statis. Instalasi pertama menghasilkan `package-lock.json`; instalasi selanjutnya memakai `npm ci` agar versi dependensi tetap sama.

- Periksa sintaks JavaScript, tautan/aset lokal, dan konsistensi data contoh: `node scripts/static-site.cjs check`.
- Siapkan berkas publik: `node scripts/static-site.cjs build`.
- Skrip `dev` di `package.json` menjalankan server pada folder `dist/` menggunakan `PORT` yang diberikan platform; `.cdf/runtime.json` memilih profil tooling. Hanya berkas situs yang disajikan; dokumen internal dan konfigurasi proyek tidak ikut disalin.
- Buka Preview (`/`); halaman langsung mengarah ke Raja Kirim. Alamat Raja Kirim juga dapat dibuka langsung di `/raja-kirim/`. Surat dan pelanggan tetap tersedia di `/raja-kirim/surat.html`.
- Setelah mengubah sumber statis, build ulang lalu restart Preview. Situs ini tidak menggunakan HMR.
- URL direktori memakai garis miring penutup (`/raja-kirim/`); URL halaman `.html` dipertahankan agar aset relatif tetap benar. Konfigurasi `serve.json` hanya mengaktifkan resolusi indeks bersih untuk direktori situs, bukan semua halaman.
- Untuk memeriksa respons halaman/aset relatif, URL direktori, dan penolakan akses berkas internal tanpa browser: `node scripts/static-site.cjs http <alamat-preview>`.

Tarif contoh Raja Kirim tersedia di `raja-kirim/tarif-contoh.js`. Jangan masukkan data sensitif: GitHub Pages bersifat publik. Integrasi nyata, akses dokumen, retensi, kepatuhan, dan tanda tangan membutuhkan desain terpisah.

## Font dan jaringan

Font antarmuka Nunito dan Montserrat dimuat dari Google Fonts, dengan font sistem sebagai fallback. Fitur Raja Kirim tetap dapat digunakan bila font eksternal tidak tersedia. Tidak ada peta, tracking, atau layanan eksternal lain yang diperlukan.
