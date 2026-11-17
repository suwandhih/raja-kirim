# Panduan fitur Raja Kirim

> **Peringatan: hanya simulasi.** Semua tarif, angka, vendor, dan pesan di Raja Kirim adalah contoh fiktif, bukan penawaran aktual. Tidak ada booking atau pembayaran. Tidak ada email, WhatsApp, maupun fax yang benar-benar dikirim. Demo ini dipakai tanpa akun. Data yang berhasil disimpan hanya ada di browser dan perangkat yang sama, bukan tempat menyimpan arsip resmi. Jangan masukkan data sensitif.

## Daftar isi

1. [Judul dan pengantar](#1-judul-dan-pengantar)
2. [Cara membuka](#2-cara-membuka)
3. [Alur kerja sehari-hari](#3-alur-kerja-sehari-hari)
4. [Perbandingan harga](#4-perbandingan-harga)
5. [Kalkulator negara](#5-kalkulator-negara)
6. [Membawa hasil ke surat penawaran](#6-membawa-hasil-ke-surat-penawaran)
7. [Daftar pelanggan](#7-daftar-pelanggan)
8. [Korespondensi](#8-korespondensi)
9. [Dokumen](#9-dokumen)
10. [Di mana data disimpan dan batasannya](#10-di-mana-data-disimpan-dan-batasannya)
11. [Glosarium istilah](#11-glosarium-istilah)
12. [Tanya jawab / masalah umum](#12-tanya-jawab--masalah-umum)

## 1. Judul dan pengantar

Raja Kirim adalah demo untuk membantu staf sales, CS, dan operasional memahami pilihan pengiriman ekspor atau impor. Anda bisa membandingkan tarif vendor contoh, menghitung total biaya sampai tujuan, lalu menyiapkan quotation untuk pelanggan.

Ada dua cara membandingkan biaya. Keduanya **berbeda**, bukan dua tampilan dari hitungan yang sama.

| Kebutuhan Anda | Menu yang digunakan | Yang dibandingkan |
| --- | --- | --- |
| Membandingkan tiga vendor contoh pada satu rute | **Perbandingan harga** | Ongkos kirim + biaya lokal, sebagai tarif contoh per pengiriman. Tidak memakai berat, volume, jumlah kontainer, atau nilai barang. |
| Membandingkan total biaya barang ke beberapa negara | **Kalkulator negara** | Nilai barang + ongkos kirim + biaya lokal + asuransi + bea + pajak. Ongkos kirim memakai berat/volume atau jumlah kontainer. |

Raja Kirim juga menyediakan data pelanggan, pencatatan korespondensi simulasi, quotation PDF, dan tanda terima PNG. Semua itu tetap alat demonstrasi. Tarif dan waktu transit harus diperiksa melalui penyedia layanan nyata sebelum dipakai untuk pekerjaan sesungguhnya.

## 2. Cara membuka

1. Buka halaman awal `/` pada alamat situs yang diberikan kepada Anda. Halaman akan langsung membuka **Perbandingan harga** Raja Kirim.
2. Jika pengalihan otomatis tidak berjalan, pilih **Buka Raja Kirim →**. Anda juga bisa membuka alamat `/raja-kirim/` langsung pada situs yang sama.
3. Gunakan empat menu di bagian atas:

   | Menu | Kegunaan |
   | --- | --- |
   | **Perbandingan harga** | Membandingkan tiga vendor simulasi untuk satu rute dari atau ke Jakarta. |
   | **Kalkulator negara** | Menghitung dan membandingkan total biaya sampai tujuan untuk satu atau beberapa negara. |
   | **Daftar pelanggan** | Mengelola data kontak pelanggan dan melihat riwayat korespondensi simulasinya. |
   | **Surat & dokumen** | Membuka tab **Korespondensi** dan **Dokumen** untuk menyiapkan pesan simulasi, quotation, atau tanda terima. |

Lintas Samudra adalah situs demo terpisah di `/lintas-samudra/`. Panduan ini hanya membahas Raja Kirim.

## 3. Alur kerja sehari-hari

Contoh berikut menggambarkan latihan kerja, bukan proses pemesanan nyata.

1. Terima pertanyaan pelanggan. Catat arah pengiriman, negara, moda, dan kebutuhan barangnya.
2. Buka **Perbandingan harga** bila ingin membandingkan vendor contoh. Gunakan **Kalkulator negara** bila ingin memperkirakan total termasuk nilai barang, asuransi, bea, dan pajak.
3. Pilih hasil yang ingin ditawarkan. Pertimbangkan total biaya dan transit, bukan hanya harga paling rendah.
4. Dari **Perbandingan harga**, pilih **Buat surat penawaran →**. Dari kartu hasil **Kalkulator negara**, pilih **Buat surat penawaran**.
5. Di tab **Dokumen**, pilih pelanggan yang akan menerima quotation. Identitas pelanggan tetap memakai data pelanggan tersebut.
6. Periksa pratinjau, lalu gunakan **Cetak / simpan PDF** untuk menyiapkan quotation. Ini tidak berarti pelanggan sudah menyetujui harga atau membuat booking.
7. Gunakan tab **Korespondensi** untuk latihan mencatat komunikasi. **Catat simulasi →** hanya mencatat contoh, bukan mengirim pesan.
8. Bila perlu, siapkan tanda terima melalui tab **Dokumen** dan gunakan **Unduh PNG**. Tanda terima contoh bukan bukti barang sungguhan sudah sampai.

Dalam alur ekspedisi, langkah membandingkan harga dan menyiapkan quotation termasuk tahap pra-pengiriman, yaitu quoting & booking. Raja Kirim hanya membantu simulasi bagian penawarannya; **booking tidak tersedia**. Tracking, pengurusan bea cukai asal/tujuan, pengantaran akhir, dan bukti serah terima resmi atau POD tidak ada di Raja Kirim. Angka bea dan pajak di kalkulator hanyalah simulasi biaya, bukan pengurusan kepabeanan.

## 4. Perbandingan harga

### 4.1 Menampilkan alternatif pengiriman

1. Buka **Perbandingan harga** di `/raja-kirim/`.
2. Pada **JENIS PENGIRIMAN**, pilih **↗ Ekspor** atau **↙ Impor**.
   - Ekspor: **Kota asal** terkunci pada **Jakarta, Indonesia**. Pilih **Negara tujuan**.
   - Impor: pilih **Negara asal**. **Kota tujuan** terkunci pada **Jakarta, Indonesia**.
3. Pilih satu negara: **Singapura**, **Malaysia**, **Tiongkok**, **Vietnam**, **Australia**, atau **Amerika Serikat**.
4. Pada **MODA PENGIRIMAN**, pilih **Laut · LCL**, **Laut · FCL**, atau **Udara**.
5. Pilih **Bandingkan harga →**. Tiga kartu akan tampil di **Alternatif pengiriman**. Saat halaman pertama dibuka, hasil awal juga sudah tersedia.

Satu sisi rute selalu Jakarta. Halaman ini tidak membandingkan rute bebas antara dua negara asing.

### 4.2 Membaca kartu hasil

1. Baca **TOTAL ESTIMASI** dan **ESTIMASI TRANSIT** pada tiap kartu. Kartu diurutkan dari total termurah. Penanda **Harga terendah** menunjukkan pembanding utama.
2. Perhatikan selisih harga dalam USD serta selisih hari terhadap opsi termurah. Lebih murah belum tentu lebih cepat.
3. Baca **Keunggulan contoh (simulasi)**. Poin seperti prioritas muat atau penjemputan hanyalah contoh layanan, bukan janji layanan aktif.
4. Buka **Rincian biaya** untuk melihat **Biaya pengiriman**, **Biaya lokal**, dan **Total estimasi**.

Untuk moda laut, tiga vendor contohnya adalah Nusantara Ocean, Pacific Bridge, dan Atlas Freight. Untuk **Udara**, nama yang tampil adalah Meridian Air Cargo, Pacific Air Connect, dan Atlas Air Freight.

**Total USD = ongkos kirim + biaya lokal.** Perkiraan rupiah = total USD × kurs contoh Rp16.000 per USD.

Tarif di sini adalah **tarif contoh per pengiriman**. Halaman ini tidak meminta berat, volume, jumlah kontainer, atau nilai barang. Totalnya juga tidak menambahkan nilai barang, asuransi, bea, dan pajak seperti **Kalkulator negara**. Karena dasar hitungnya berbeda, angka dan transit kedua menu tidak harus sama.

### 4.3 Memilih kartu dan membuat penawaran

1. Klik atau ketuk kartu yang diinginkan, atau gunakan pilihan **Pilih Nusantara Ocean**, **Pilih Pacific Bridge**, atau **Pilih Atlas Freight** sesuai kartu. Nama pilihan mengikuti nama vendor yang sedang tampil.
2. Jika memakai keyboard, tekan Tab sampai pilihan vendor mendapat fokus. Gunakan tombol panah kanan/bawah untuk maju atau kiri/atas untuk mundur.
3. Periksa ringkasan **Pilihan Anda:** di bawah hasil. Vendor, rute, moda, harga, transit, dan selisihnya mengikuti kartu terpilih. Kartu tersebut ditandai **Terpilih**.
4. Pilih **Buat surat penawaran →** untuk membawa pilihan terakhir ke quotation.

Setiap kali **Bandingkan harga →** ditekan, pilihan kartu kembali ke yang termurah. Pilihan kartu juga tidak diingat setelah halaman dimuat ulang.

Mengubah arah, negara, atau moda saja **belum memperbarui hasil**. Tekan **Bandingkan harga →** terlebih dahulu. Jika langsung membuat surat, yang dibawa tetap pilihan dari hasil perbandingan terakhir, bukan perubahan isian yang belum dibandingkan.

### 4.4 Contoh: ekspor Jakarta → Singapura, LCL

1. Pilih **↗ Ekspor**.
2. Pilih **Singapura** pada **Negara tujuan**.
3. Pilih **Laut · LCL**, lalu **Bandingkan harga →**.
4. Cocokkan hasil dengan tabel berikut. Semua angka adalah simulasi.

| Vendor contoh | Ongkos kirim (USD) | Biaya lokal (USD) | Total (USD) | Perkiraan rupiah | Transit | Selisih dari termurah |
| --- | ---: | ---: | ---: | ---: | --- | --- |
| Nusantara Ocean | 820 | 180 | 1.000 | Rp16.000.000 | 28 hari | Pembanding |
| Pacific Bridge | 1.005 | 155 | 1.160 | Rp18.560.000 | 26 hari | +160 USD; 2 hari lebih cepat |
| Atlas Freight | 1.115 | 210 | 1.325 | Rp21.200.000 | 30 hari | +325 USD; 2 hari lebih lama |

Contoh penjumlahan: Nusantara Ocean = 820 + 180 = **1.000 USD**. Perkiraan rupiah = 1.000 × 16.000 = **Rp16.000.000**. Nusantara Ocean menjadi pilihan awal karena totalnya paling murah, meskipun Pacific Bridge lebih cepat pada contoh ini.

## 5. Kalkulator negara

### 5.1 Mengisi rencana pengiriman

Buka **Kalkulator negara** atau alamat `/raja-kirim/kalkulator.html`. Menu ini membandingkan **total biaya sampai tujuan**, bukan vendor.

1. Pada **JENIS PENGIRIMAN**, pilih **Ekspor** untuk pengiriman dari Indonesia atau **Impor** untuk pengiriman ke Indonesia.
2. Centang satu atau beberapa negara pada **NEGARA TUJUAN** untuk ekspor, atau **NEGARA ASAL** untuk impor. Enam negara yang tersedia sama dengan di **Perbandingan harga**. Saat awal dibuka, semuanya terpilih. Harus ada sedikitnya satu negara.
3. Pada **MODA PENGIRIMAN**, pilih **Udara**, **Laut · LCL**, atau **Laut · FCL**.
4. Isi **NILAI BARANG (USD)** dengan angka lebih dari 0.
5. Untuk **Udara** atau **Laut · LCL**, isi **BERAT (KG)** dan **VOLUME (M³)**. Keduanya wajib berupa angka lebih dari 0.
6. Untuk **Laut · FCL**, isi **JUMLAH KONTAINER** dengan bilangan bulat 1–50. Berat dan volume tidak dipakai pada moda ini.
7. Jika diperlukan, isi **DESKRIPSI BARANG (OPSIONAL)**, maksimal 120 karakter.
8. Pilih **Bandingkan total biaya →**. Hasil juga menyesuaikan ketika isian yang valid diubah.

Jika isian belum benar, perbaiki kolom yang ditandai. Misalnya, tanpa pilihan negara muncul pesan “Pilih sedikitnya satu negara dari daftar.” Untuk jumlah kontainer yang salah, pesannya “Jumlah kontainer harus bilangan bulat 1–50.”

### 5.2 Cara membaca hasil

1. Lihat kartu di **Perbandingan negara**. Urutannya dari total termurah, dengan penanda **Termurah**.
2. Bandingkan **TOTAL BIAYA SIMULASI**, perkiraan rupiah, transit contoh, dan selisih USD dari negara termurah.
3. Buka **Rincian 6 komponen biaya +** untuk melihat nilai barang, ongkos kirim, biaya lokal, asuransi, bea masuk, serta pajak impor. Catatan di bawahnya menunjukkan ukuran yang ditagih, tarif, CIF, dan kurs.
4. Pada negara yang dipilih, gunakan **Buat surat penawaran** bila ingin melanjutkan ke quotation.

Ekspor memakai bea dan pajak contoh negara tujuan. Impor memakai bea dan pajak contoh Indonesia. Pajak impor Indonesia berlaku sama untuk semua negara asal, sedangkan bea contoh dapat berbeda menurut negara asal.

### 5.3 Rumus dengan bahasa sederhana

Hitung ongkos kirim dahulu sesuai moda, kemudian tambahkan komponen lainnya.

1. **Udara:** hitung berat volume = volume m³ × 167. Bandingkan dengan berat sebenarnya. Angka yang lebih besar menjadi kg tertagih. Ongkos kirim = kg tertagih × tarif USD per kg.
2. **LCL:** bandingkan tiga angka: volume m³, berat kg ÷ 1.000, dan minimum 1. Angka terbesar menjadi W/M yang ditagih. Ongkos kirim = W/M × tarif USD per W/M.
3. **FCL:** ongkos kirim = jumlah kontainer × tarif USD per kontainer. Berat dan volume tidak ikut dihitung.
4. **Asuransi:** (nilai barang + ongkos kirim) × persentase asuransi. Persentase bawaan adalah 0,5%.
5. **CIF:** nilai barang + ongkos kirim + asuransi. Ini dasar penghitungan bea pada simulasi ini.
6. **Bea:** CIF × persentase bea.
7. **Pajak:** (CIF + bea) × persentase pajak.
8. **Total biaya sampai tujuan:** CIF + biaya lokal + bea + pajak.
9. **Perkiraan rupiah:** total USD × kurs contoh yang sedang dipakai.

Total tersebut **sudah termasuk nilai barang**. Jangan menambahkannya lagi. Aplikasi menghitung dengan angka lengkap, lalu membulatkan tampilan. Menjumlahkan angka yang sudah dibulatkan dapat menghasilkan selisih kecil.

Rumus ini disederhanakan. Tidak ada pemilihan kategori barang atau penghitungan seluruh pungutan pabean yang sebenarnya. Bea dan pajak contoh bukan ketentuan resmi.

### 5.4 Contoh langkah demi langkah: ekspor ke Singapura lewat udara

Contoh ini memakai angka bawaan. Jika pengaturan pernah diubah, gunakan **Kembalikan angka contoh** dan setujui konfirmasinya bila memang ingin mengganti seluruh pengaturan kalkulator. Atau, periksa angka di **Pengaturan angka contoh** tanpa menghapus pengaturan Anda.

1. Pilih **Ekspor**, centang **Singapura** saja, lalu pilih **Udara**.
2. Isi **NILAI BARANG (USD)** = 5.000 USD, **BERAT (KG)** = 100 kg, dan **VOLUME (M³)** = 0,5 m³. Deskripsi boleh dikosongkan.
3. Periksa angka contoh Singapura untuk arah ekspor dan moda udara: tarif 4,80 USD/kg; biaya lokal 180 USD; bea 0%; pajak 9%; asuransi 0,5%; kurs Rp16.000 per USD. Transit contoh adalah 2 hari.
4. Berat volume = 0,5 × 167 = **83,5 kg**. Bandingkan dengan berat sebenarnya 100 kg. Kg tertagih = **100 kg**.
5. Ongkos kirim = 100 × 4,80 = **480,00 USD**.
6. Asuransi = (5.000 + 480) × 0,5% = **27,40 USD**.
7. CIF = 5.000 + 480 + 27,40 = **5.507,40 USD**.
8. Bea = 5.507,40 × 0% = **0,00 USD**.
9. Pajak = (5.507,40 + 0) × 9% = 495,666 USD, ditampilkan sekitar **495,67 USD**.
10. Total = 5.507,40 + 180 + 0 + 495,666 = 6.183,066 USD, ditampilkan sekitar **6.183,07 USD**.
11. Perkiraan rupiah memakai total sebelum pembulatan: 6.183,066 × 16.000 = **Rp98.929.056**.
12. Pilih **Bandingkan total biaya →**, lalu buka **Rincian 6 komponen biaya +** untuk mencocokkan hasilnya.

Hasil ini berbeda dari contoh LCL pada bagian 4 karena moda dan dasar hitungnya berbeda. Di sini total memasukkan nilai barang dan komponen tambahan, bukan hanya kirim + lokal.

### 5.5 Mengubah dan mengembalikan angka contoh

1. Pilih arah dan moda pada formulir pengiriman terlebih dahulu.
2. Buka **Pengaturan angka contoh**. Tabel mengikuti arah dan moda yang aktif.
3. Ubah tarif kirim, **Lokal (USD)**, **Bea (%)**, **Pajak (%)**, atau **Transit (hari)** sesuai latihan. Tarif dan transit mengikuti moda aktif. Biaya lokal dan bea berlaku untuk semua moda pada arah dan negara yang sama.
4. Ubah **KURS USD → IDR** atau **ASURANSI (%)** bila diperlukan. Untuk impor, gunakan **PAJAK IMPOR INDONESIA (%)**; nilainya berlaku untuk semua negara asal.
5. Perubahan yang valid otomatis disimpan di browser ini. Tombol **Simpan angka contoh** juga tersedia. Periksa pesan penyimpanan sebelum menutup halaman.
6. Untuk kembali ke seluruh angka bawaan, pilih **Kembalikan angka contoh**. Konfirmasi menyatakan bahwa pengaturan **kedua arah dan semua moda** di browser ini akan diganti. Batalkan jika ingin mempertahankan perubahan Anda.

Batas isian pengaturan:

- Kurs harus lebih dari 0.
- Asuransi, bea, dan pajak berada pada 0–100%.
- Tarif kirim dan biaya lokal berada pada 0–1.000.000 USD sesuai satuannya.
- Transit harus bilangan bulat 1–120 hari.

Jika ada angka tidak valid, hasil sementara disembunyikan. Perbaiki kolom yang ditandai sebelum mengganti arah atau moda. Jika penyimpanan browser penuh atau tidak tersedia, angka mungkin hanya berlaku selama halaman terbuka; jangan menganggapnya sudah tersimpan.

Yang disimpan adalah **pengaturan angka contoh**, bukan riwayat perhitungan atau isian rencana pengiriman. Mengubah atau mengembalikan angka kalkulator **tidak mengubah Perbandingan harga**.

## 6. Membawa hasil ke surat penawaran

### 6.1 Memilih sumber penawaran

1. Dari **Perbandingan harga**, pilih kartu yang diinginkan, periksa **Pilihan Anda:**, lalu tekan **Buat surat penawaran →**. Atau, dari **Kalkulator negara**, tekan **Buat surat penawaran** pada hasil negara yang dipilih.
2. Setelah hasil berhasil disimpan, halaman **Surat & dokumen** terbuka pada tab **Dokumen**, dengan jenis **Quotation / penawaran (PDF)**.
3. Periksa penanda sumber: **Data dari Kalkulator negara** atau **Data dari Perbandingan harga**. Penanda juga menampilkan rute dan total agar Anda bisa mengecek pilihan.
4. Pilih satu atau beberapa pelanggan, lalu periksa pratinjau quotation untuk tiap pelanggan sebelum mencetaknya.

Hanya **satu pilihan terbaru** yang disimpan. Memilih hasil baru dari salah satu menu menggantikan pilihan sebelumnya dari menu mana pun. Hasil yang sudah berhasil dibawa ke penawaran tetap tersedia setelah halaman dimuat ulang pada situs, browser, dan perangkat yang sama, selama data browser tidak dihapus.

Ini berbeda dari pilihan kartu pada **Perbandingan harga**, yang kembali ke termurah saat halaman perbandingan dimuat ulang. Membuka ulang perbandingan saja tidak mengganti hasil yang sudah disimpan untuk quotation. Untuk menggantinya, pilih hasil dan tekan tombol penawaran lagi.

### 6.2 Data apa yang ikut dibawa?

Data yang dibawa adalah **salinan hasil pada saat dipilih**. Perubahan angka kalkulator atau isian perbandingan sesudahnya tidak otomatis mengubah quotation. Pilih hasil baru dan tekan tombol penawaran lagi untuk memperbaruinya.

| Asal hasil | Data yang mengisi quotation |
| --- | --- |
| **Kalkulator negara** | Rute dari/ke Indonesia, arah dan moda, deskripsi barang bila diisi, berat dan volume atau jumlah kontainer, total USD dan perkiraan rupiah, serta enam komponen biaya. |
| **Perbandingan harga** | Rute dari/ke Jakarta, arah dan moda, vendor simulasi, transit, total USD dan perkiraan rupiah, serta rincian kirim dan lokal. Berat tertulis **Belum ditentukan (estimasi per pengiriman)** karena halaman ini tidak meminta ukuran kiriman. |

Nama, perusahaan, alamat, kontak, nomor dokumen, dan tanggal tetap memakai data masing-masing pelanggan. Memilih penawaran **tidak mengubah data pelanggan yang tersimpan**. Salinan hasil hanya digunakan untuk quotation; tanda terima tetap memakai data contoh pelanggan.

### 6.3 Kembali memakai data contoh pelanggan

1. Di tab **Dokumen**, pilih **Pakai data contoh pelanggan**.
2. Hasil terpilih untuk quotation dihapus. Rute, layanan, ukuran, dan total kembali memakai nilai contoh milik pelanggan.
3. Data pelanggan yang tersimpan tidak dihapus atau diubah. Tanpa hasil penawaran terpilih, rincian biaya bernilai **—**.

Jika muncul pesan bahwa hasil tidak dapat disimpan atau dihapus karena penyimpanan browser tidak tersedia, ikuti pesan tersebut. Saat penyimpanan penawaran gagal, halaman tidak dipindahkan; perbaiki izin atau ruang penyimpanan browser, lalu coba lagi. Jangan menghapus data browser sembarangan karena data latihan lain di browser ini juga dapat hilang.
## 7. Daftar pelanggan

Buka **Daftar pelanggan** dari menu atas atau tab pada **Surat & dokumen**. Alamat langsungnya adalah `/raja-kirim/surat.html#pelanggan`.

### 7.1 Menambah pelanggan

1. Gunakan formulir **Tambah pelanggan**.
2. Isi **Nama PIC** dan **Perusahaan**. Keduanya wajib.
3. Isi **Alamat jalan / pengiriman manual** bila diperlukan. Alamat ini dapat dicantumkan pada dokumen, bukan dipakai untuk memesan pengantaran.
4. Pada **Email pelanggan**, isi **Email 1**, **Email 2**, atau keduanya. Pilih **Email 1 utama** atau **Email 2 utama** sesuai alamat yang akan dipakai.
5. Pada **WhatsApp pelanggan**, isi **WhatsApp 1**, **WhatsApp 2**, atau keduanya. Pilih **Nomor 1 utama** atau **Nomor 2 utama** sesuai nomor yang akan dipakai.
6. Pada **Saluran komunikasi utama**, pilih **Email** atau **WhatsApp**. Pilihan ini dipakai saat mencatat pesan dengan pilihan **Utama tiap pelanggan**.
7. Isi **Nomor fax** bila ada. Alamat dan fax muncul pada template dokumen bawaan. Tidak ada pengiriman surat fisik atau fax otomatis.
8. Pilih **Simpan pelanggan**. Pastikan muncul pesan “Data pelanggan disimpan di browser ini.” sebelum menganggapnya tersimpan.

Aturan isian:

- Email yang diisi harus memakai format alamat email yang benar.
- Nomor WhatsApp atau fax yang diisi harus mengandung sedikitnya **6 digit angka**. Awali dengan angka atau tanda +. Spasi, tanda kurung, titik, dan tanda hubung boleh digunakan; huruf tidak boleh.
- Bila salah satu email diisi, email yang ditandai utama juga harus terisi. Aturan yang sama berlaku untuk nomor WhatsApp.
- Bila ada kontak email atau WhatsApp, **Saluran komunikasi utama** harus memiliki kontak utama yang terisi. Contoh: jika hanya memiliki WhatsApp, pilih **WhatsApp**, bukan **Email**.
- Pelanggan **tanpa email dan WhatsApp tetap boleh dibuat** untuk dokumen manual. Pelanggan tersebut tidak dapat digunakan untuk mencatat pesan melalui saluran yang kontaknya kosong. Fax bukan saluran korespondensi di aplikasi ini.

### 7.2 Mengedit dan membuka kotak pesan pelanggan

1. Pilih nama pelanggan pada daftar. Rincian kontak dan jumlah pesan miliknya akan tampil.
2. Pilih **Edit pelanggan** untuk mengubah data.
3. Perbaiki isian dan pilihan kontak utama, lalu pilih **Simpan pelanggan**. Gunakan **Batal edit** bila tidak ingin menyimpan perubahan formulir.
4. Di rincian pelanggan, gunakan **↓ Kotak masuk** atau **↑ Kotak keluar** pada kelompok **Email** atau **WhatsApp**. Angka dalam kurung pada tombol menunjukkan jumlah catatan.
5. Tab **Korespondensi** akan terbuka dengan pelanggan, saluran, dan arah riwayat yang sesuai.

Setiap pelanggan memiliki kotak pesan sendiri. Mengedit kontak tidak berarti ada pesan yang dikirim atau diambil dari layanan email/WhatsApp.

## 8. Korespondensi

Tab **Korespondensi** berisi riwayat simulasi dan formulir pesan baru. Kotak masuk dan keluar di sini **bukan** kotak email atau WhatsApp sungguhan.

### 8.1 Melihat riwayat per pelanggan

1. Buka tab **Korespondensi**. Pada **Riwayat surat**, pilih **Pelanggan pemilik riwayat**.
2. Pada **Saluran riwayat**, pilih **Email & WhatsApp**, **Email**, atau **WhatsApp**.
3. Pilih **Semua**, **Kotak masuk**, atau **Kotak keluar** untuk menyaring arah catatan. Kotak masuk adalah contoh pesan dari pelanggan; kotak keluar adalah contoh pesan untuk pelanggan.
4. Baca subjek, tanggal, dan isi catatan yang tampil. Setiap halaman memuat paling banyak **8 pesan**.
5. Gunakan **Sebelumnya** atau **Berikutnya** bila ada halaman lain. Mengganti pelanggan atau filter mengembalikan tampilan ke halaman pertama.
6. Untuk melengkapi latihan, pilih **Lengkapi contoh email & WhatsApp**. Tombol ini menambahkan contoh yang belum ada bagi pelanggan terpilih, hanya untuk saluran dengan kontak utama yang valid. Ini tidak mengambil pesan dari layanan luar.

Jika tidak ada catatan yang cocok, periksa kembali pelanggan dan filter. Pelanggan baru tanpa kontak elektronik tidak akan mendapat contoh pesan untuk saluran yang kosong.

### 8.2 Membuat catatan pesan baru

1. Di **Tulis korespondensi**, centang satu atau beberapa nama pada **Pilih pelanggan**.
2. Isi **Subjek**, maksimal 160 karakter.
3. Tulis **Isi pesan**. Gunakan toolbar di atasnya bila ingin memberi format teks. Isi pesan tidak boleh kosong.
4. Pada **Saluran simulasi**, pilih:
   - **Utama tiap pelanggan**: mengikuti **Saluran komunikasi utama** dan kontak utama masing-masing pelanggan.
   - **Email**: memakai email yang ditandai utama pada setiap pelanggan.
   - **WhatsApp**: memakai nomor WhatsApp yang ditandai utama pada setiap pelanggan.
5. Pada **Arah simulasi**, pilih **Keluar** untuk catatan pesan kepada pelanggan, atau **Masuk** untuk catatan pesan dari pelanggan.
6. Pilih **Lihat pratinjau**. Periksa nama, perusahaan, saluran, tujuan, subjek, dan isi untuk setiap pelanggan. Bila ada pesan tentang kontak yang belum valid, perbaiki melalui **Daftar pelanggan** dahulu.
7. Setelah benar, pilih **Catat simulasi →**. Catatan ditambahkan ke riwayat masing-masing pelanggan pada arah yang dipilih.
8. Periksa status. Jika berhasil disimpan, pesannya “Simulasi dicatat di browser ini. Tidak ada pesan yang dikirim.”

Pilihan **Utama tiap pelanggan** tidak otomatis beralih ke saluran lain jika kontaknya kosong. Untuk beberapa pelanggan sekaligus, pastikan semua memiliki kontak utama yang valid pada saluran yang dipilih.

**Tidak ada email, WhatsApp, atau fax yang dikirim.** Memilih **Masuk** juga tidak menarik pesan sungguhan. Anda hanya membuat catatan simulasi. Riwayat menyimpan isi sebagai teks; jangan mengandalkan tampilan formatnya sebagai arsip pesan resmi.

## 9. Dokumen

Tab **Dokumen** menyiapkan quotation dan tanda terima berdasarkan pelanggan yang dipilih. Semua hasil diberi keterangan simulasi.

### 9.1 Memilih jenis dan pelanggan

1. Buka tab **Dokumen** pada **Surat & dokumen**.
2. Pada **Jenis dokumen**, pilih **Quotation / penawaran (PDF)** atau **Tanda terima (PNG)**.
3. Pada **Pilih pelanggan**, centang satu atau beberapa pelanggan. Pratinjau terpisah muncul untuk setiap pelanggan.
4. Periksa **Isi template**. Ubah kalimat sesuai latihan. Gunakan toolbar untuk mengatur teks bila perlu.
5. Periksa **Pratinjau dokumen** setelah mengubah isi. Nama dan data lain akan mengikuti tiap pelanggan terpilih.

Hanya quotation yang memakai hasil terpilih dari **Kalkulator negara** atau **Perbandingan harga**. Tanda terima tetap memakai nilai contoh milik pelanggan. Pelanggan yang baru ditambahkan memiliki nilai seperti “Contoh nomor” dan “Contoh total”; ini bukan data transaksi nyata. Bila perlu, ganti teks tersebut dalam template untuk latihan dan periksa kembali setiap pratinjau.

### 9.2 Memakai penanda isian pada template

Penanda isian adalah tulisan di antara dua pasang kurung kurawal, misalnya `{{nama}}`. Pertahankan ejaannya agar diganti dengan data yang sesuai.

| Penanda isian | Yang akan tampil |
| --- | --- |
| `{{nama}}` | Nama PIC pelanggan. |
| `{{perusahaan}}` | Perusahaan pelanggan. |
| `{{alamat}}` | Alamat pelanggan; **—** bila kosong. |
| `{{fax}}` | Nomor fax pelanggan; **—** bila kosong. |
| `{{nomor}}` | Nomor dokumen contoh milik pelanggan. |
| `{{tanggal}}` | Tanggal contoh milik pelanggan. Bukan otomatis tanggal hari ini. |
| `{{rute}}` | Rute dari hasil penawaran terpilih untuk quotation, atau rute contoh pelanggan. |
| `{{layanan}}` | Layanan dari hasil penawaran terpilih untuk quotation, atau layanan contoh pelanggan. |
| `{{berat}}` | Ukuran kiriman dari hasil penawaran terpilih untuk quotation, atau berat contoh pelanggan. |
| `{{total}}` | Total dari hasil penawaran terpilih untuk quotation, atau total contoh pelanggan. |
| `{{rincian}}` | Rincian biaya dari hasil penawaran terpilih, hanya untuk quotation. Tanpa hasil tersebut, atau pada tanda terima, nilainya **—**. |

1. Ketik penanda yang diperlukan pada **Isi template**. Misalnya, gunakan `{{nama}}` agar satu template menampilkan nama yang berbeda untuk setiap pelanggan.
2. Pertahankan `{{alamat}}` dan `{{fax}}` bila keduanya ingin tetap muncul pada hasil dokumen. Menghapus penandanya juga menghilangkan isian tersebut dari bagian template itu.
3. Periksa tiap pratinjau. Teks biasa yang Anda ketik, termasuk angka, akan sama untuk semua pelanggan terpilih; penanda isianlah yang menyesuaikan datanya.
4. Pilih **Kembalikan template** bila ingin mengembalikan jenis dokumen yang sedang aktif ke template contoh awal. Perubahan pada template jenis itu akan diganti.

Template quotation dan tanda terima dapat diedit terpisah. Perubahannya tetap ada saat Anda berganti jenis selama halaman masih terbuka, tetapi **tidak disimpan setelah halaman dimuat ulang atau ditutup**. Mengembalikan template berbeda dari **Pakai data contoh pelanggan**: yang pertama mengganti isi template, sedangkan yang kedua menghapus pilihan hasil untuk quotation seperti pada bagian 6.

### 9.3 Mencetak atau menyimpan quotation sebagai PDF

1. Pilih **Quotation / penawaran (PDF)** dan pelanggan yang diperlukan.
2. Periksa quotation pada pratinjau pelanggan yang benar, termasuk rute, total, alamat, dan fax bila diisi.
3. Pada pratinjau itu, pilih **Cetak / simpan PDF**. Aplikasi membuka jendela baru dan dialog cetak browser, bukan langsung mengunduh PDF.
4. Pada dialog cetak, pilih **Simpan sebagai PDF**, lalu tentukan nama dan tempat menyimpan berkas. Nama pilihan pada dialog bisa berbeda menurut browser atau perangkat.
5. Jika jendela tidak terbuka, izinkan pop-up untuk situs ini, lalu pilih **Cetak / simpan PDF** lagi.
6. Untuk pelanggan lain, gunakan tombol pada pratinjau pelanggan tersebut. Satu tombol menangani satu dokumen pelanggan, bukan seluruh pelanggan sekaligus.

PDF tetap dokumen simulasi, bukan penawaran resmi atau bukti transaksi. Menyimpannya tidak mengirimkan dokumen kepada pelanggan.

### 9.4 Mengunduh tanda terima sebagai PNG

1. Pada **Jenis dokumen**, pilih **Tanda terima (PNG)**.
2. Pilih pelanggan, lalu periksa isi dan nilai contoh pada pratinjaunya. Hasil kalkulator atau perbandingan tidak mengisi tanda terima ini.
3. Pilih **Unduh PNG** pada pratinjau pelanggan yang benar.
4. Periksa berkas gambar yang diunduh browser. Ulangi untuk pelanggan lain bila diperlukan.

PNG berisi teks tanda terima sebagai gambar; tidak semua format teks editor dipertahankan. Berkasnya diberi keterangan simulasi dan **bukan bukti pembayaran yang sah**. Mengunduhnya tidak membuktikan bahwa barang telah diterima.

## 10. Di mana data disimpan dan batasannya

Data latihan yang berhasil disimpan hanya ada di **situs, browser, dan perangkat yang sama**. Data tidak tersinkron ke perangkat lain, browser lain, atau rekan kerja. Tidak ada akun untuk memulihkan data tersebut.

| Data | Yang perlu diketahui |
| --- | --- |
| Pengaturan angka kalkulator | Disimpan di browser ini jika penyimpanan berhasil. Isian rencana pengiriman dan riwayat hitung tidak disimpan. |
| Hasil terpilih untuk quotation | Hanya satu pilihan terbaru yang disimpan. Pilihan baru menggantikan yang lama. |
| Pelanggan dan riwayat korespondensi | Disimpan di browser ini jika berhasil, bukan di layanan email/WhatsApp. |
| Perubahan template | Hanya berlaku selama halaman terbuka. Muat ulang atau tutup halaman mengembalikannya ke template awal. |
| Pilihan kartu **Perbandingan harga** | Kembali ke pilihan termurah saat halaman itu dimuat ulang. Ini tidak menghapus hasil yang sudah dibawa ke quotation. |
| PDF dan PNG yang disimpan | Menjadi berkas di tempat yang Anda pilih atau lokasi unduhan browser. Bukan salinan cadangan seluruh data pelanggan dan riwayat. |

Untuk menggunakan demo dengan aman:

1. Gunakan data fiktif. Jangan memasukkan identitas atau informasi pengiriman yang sensitif.
2. Baca pesan penyimpanan setelah mengubah pelanggan, mencatat pesan, mengubah angka, atau memilih penawaran. Jika disebut hanya sementara, jangan menutup atau memuat ulang halaman sebelum mencatat informasi latihan yang diperlukan.
3. Jangan menghapus data situs/browser tanpa memahami akibatnya. Pelanggan, riwayat, pengaturan, dan pilihan penawaran yang tersimpan dapat hilang.
4. Jangan menganggap tampilan pada perangkat lain akan sama. Siapkan kembali data latihan bila memakai browser, perangkat, atau alamat situs yang berbeda.
5. Periksa hasil cetak/unduhan sendiri. Aplikasi tidak mengirimkannya melalui email, WhatsApp, fax, atau pengantaran fisik.

Bentuk huruf dari layanan font memerlukan internet. Jika tidak termuat, browser dapat memakai bentuk huruf pengganti.

Semua tarif, kurs, transit, vendor, dan isi pesan adalah contoh. **Tidak ada integrasi pengiriman nyata, pesan terkirim, booking, atau pembayaran.** Perhitungan bea/pajak bukan pengurusan pabean atau nasihat resmi. Quotation dan tanda terima tidak menggantikan arsip operasional atau bukti transaksi yang sah.

## 11. Glosarium istilah

| Istilah | Arti sederhana dalam panduan ini |
| --- | --- |
| FCL — Full Container Load | Pengiriman memakai kontainer utuh. Pada kalkulator, ongkos kirim dihitung per kontainer. |
| LCL — Less than Container Load | Muatan yang berbagi ruang kontainer. Pada kalkulator, ongkos kirim memakai W/M. |
| W/M — Weight or Measurement | Satuan tagihan LCL berdasarkan berat atau volume. Demo memilih yang terbesar antara m³, kg ÷ 1.000, dan minimum 1. |
| Berat volume | Berat pembanding dari ruang yang dipakai barang. Rumus udara pada demo: volume m³ × 167. |
| Kg tertagih | Berat yang dipakai untuk menghitung ongkos udara: yang lebih besar antara berat sebenarnya dan berat volume. |
| Ongkos kirim — base freight | Biaya angkutan utama. Dasarnya berbeda: tarif contoh per pengiriman pada **Perbandingan harga**, atau ukuran kiriman pada **Kalkulator negara**. |
| Biaya lokal — local charges | Komponen biaya setempat yang ditambahkan pada ongkos kirim. Angka demo bukan rincian semua biaya pelabuhan atau bandara sebenarnya. |
| Asuransi | Komponen perlindungan barang. Simulasi menghitungnya dari nilai barang + ongkos kirim; tidak menerbitkan polis asuransi. |
| CIF — Cost, Insurance and Freight | Jumlah nilai barang, asuransi, dan ongkos kirim. Menjadi dasar hitung bea pada demo. |
| Bea masuk | Pungutan impor. Demo menghitungnya sebagai persentase CIF, bukan menurut kategori barang yang sebenarnya. |
| Pajak impor | Pajak atas impor. Demo menghitungnya sebagai persentase dari jumlah CIF dan bea. Angka contoh bukan ketentuan perpajakan resmi. |
| Transit | Perkiraan lama pengiriman dalam hari. Waktu pada demo bukan jadwal atau jaminan kedatangan. |
| Kurs | Nilai tukar uang. Pada demo dipakai untuk mengubah USD menjadi perkiraan rupiah. |
| Quotation | Surat penawaran biaya dan layanan. Dalam demo, dokumennya dapat dicetak atau disimpan sebagai PDF. Bukan konfirmasi booking. |
| Tanda terima | Dokumen pengakuan penerimaan. Pada demo hanya contoh gambar PNG, bukan bukti pembayaran sah atau POD resmi. |
| PIC — Person in Charge | Orang yang menjadi kontak penanggung jawab di pihak pelanggan. |
| Saluran utama | Pilihan **Email** atau **WhatsApp** milik pelanggan untuk pencatatan simulasi dengan pilihan **Utama tiap pelanggan**. Memakai kontak yang ditandai utama. |

## 12. Tanya jawab / masalah umum

Pesan di bawah disalin dari aplikasi. Browser juga dapat menampilkan pesan isian wajib atau format email dengan kalimatnya sendiri.

### 12.1 Jendela PDF tidak terbuka

**Pesan:** “Jendela cetak diblokir. Izinkan pop-up untuk menyimpan PDF.”

**Penyebab:** browser memblokir jendela baru untuk mencetak.

1. Izinkan pop-up untuk situs ini melalui pengaturan browser.
2. Kembali ke pratinjau quotation pelanggan yang benar dan pilih **Cetak / simpan PDF** lagi.
3. Pilih **Simpan sebagai PDF** pada dialog cetak. Tidak ada PDF yang dikirim ke pelanggan.

### 12.2 Pelanggan atau riwayat hanya tersimpan sementara

**Pesan yang dapat muncul:**

- “Penyimpanan browser tidak tersedia atau penuh; perubahan hanya berlaku selama halaman terbuka.”
- “Data pelanggan hanya tersimpan sementara.”
- “Simulasi dicatat sementara, tetapi tidak dapat disimpan. Tidak ada pesan yang dikirim.”

**Penyebab:** browser tidak mengizinkan penyimpanan atau ruangnya penuh. Perubahan masih terlihat pada halaman, tetapi belum menjadi data tersimpan.

1. Jangan menutup atau memuat ulang halaman dahulu. Catat informasi latihan yang masih diperlukan.
2. Periksa izin penyimpanan situs dan ruang browser. Hindari menghapus data situs ini tanpa memahami bahwa pelanggan serta riwayat latihan bisa hilang.
3. Setelah penyimpanan tersedia, simpan ulang pelanggan melalui **Edit pelanggan** lalu **Simpan pelanggan**. Untuk pesan, periksa riwayat sebelum mencatat ulang agar tidak menggandakan catatan.

### 12.3 Pengaturan angka atau penawaran tidak tersimpan

**Pesan pengaturan:** “Penyimpanan browser tidak tersedia atau penuh. Angka hanya berlaku selama halaman ini terbuka; belum tersimpan.”

**Pesan penawaran:** “Penawaran belum dapat disimpan karena penyimpanan browser tidak tersedia atau penuh. Izinkan penyimpanan atau kosongkan ruang, lalu coba lagi; halaman tidak dipindahkan.”

**Penyebab:** pengaturan atau hasil terpilih belum dapat disimpan oleh browser.

1. Catat angka latihan yang ingin dipertahankan sebelum menutup halaman.
2. Periksa izin dan ruang penyimpanan browser tanpa langsung menghapus data situs.
3. Untuk pengaturan, pilih **Simpan angka contoh** setelah masalah selesai. Untuk penawaran, pilih lagi hasil yang benar lalu tekan **Buat surat penawaran** pada kalkulator, atau **Buat surat penawaran →** pada perbandingan.
4. Periksa pesan dan penanda sumber pada quotation. Jangan menganggap pilihan baru sudah menggantikan yang lama jika penyimpanannya gagal.

### 12.4 Nama PIC atau perusahaan belum diisi

**Pesan:** “Isi nama PIC dan perusahaan.”

**Penyebab:** salah satu isian wajib kosong atau hanya berisi spasi. Browser juga dapat lebih dulu menandai kolom wajib.

1. Isi **Nama PIC** dan **Perusahaan** dengan data latihan yang jelas.
2. Pilih **Simpan pelanggan** lagi. Email dan WhatsApp boleh kosong bila pelanggan hanya dipakai untuk dokumen manual.

### 12.5 Format email atau nomor tidak benar

**Pesan email:** “Periksa format alamat email pelanggan.”

**Pesan nomor:** “Periksa nomor WhatsApp atau fax; gunakan sedikitnya 6 digit angka.”

**Penyebab:** email yang diisi tidak berformat benar, atau nomor WhatsApp/fax kurang dari enam digit maupun memuat karakter yang tidak diterima.

1. Periksa **Email 1** dan **Email 2** yang diisi. Gunakan format alamat email lengkap; jangan memasukkan nama orang di kolom alamat email.
2. Periksa **WhatsApp 1**, **WhatsApp 2**, dan **Nomor fax** yang diisi. Gunakan sedikitnya 6 digit, diawali angka atau +. Hilangkan huruf dan karakter lain selain spasi, tanda kurung, titik, atau tanda hubung.
3. Kosongkan kontak opsional yang memang tidak ada, lalu pilih **Simpan pelanggan** lagi.

### 12.6 Kontak utama atau saluran utama belum memiliki isi

**Pesan yang dapat muncul:**

- “Email yang ditandai utama belum diisi.”
- “Nomor WhatsApp yang ditandai utama belum diisi.”
- “Saluran utama belum memiliki kontak. Isi kontaknya atau pilih saluran lain.”

**Penyebab:** kontak kedua diisi tetapi kontak pertama yang kosong masih ditandai utama, atau saluran utama tidak memiliki kontak.

1. Pilih **Email 1 utama** atau **Email 2 utama** sesuai email yang terisi.
2. Pilih **Nomor 1 utama** atau **Nomor 2 utama** sesuai nomor WhatsApp yang terisi.
3. Periksa **Saluran komunikasi utama**. Jika hanya punya WhatsApp, pilih **WhatsApp**; jika hanya punya email, pilih **Email**.
4. Pilih **Simpan pelanggan**. Sebelum membuat pesan baru, pastikan setiap pelanggan terpilih punya kontak yang valid pada saluran simulasi tersebut.

### 12.7 Pesan atau pratinjau dokumen belum bisa dibuat

**Pesan yang dapat muncul:**

- “Pilih setidaknya satu pelanggan.”
- “Isi subjek pesan, maksimal 160 karakter.”
- “Isi pesan terlebih dahulu.”
- “Pilih setidaknya satu pelanggan untuk melihat dokumen.”

**Penyebab:** pelanggan belum dicentang, subjek kosong/terlalu panjang, atau isi pesan kosong. Pilihan pelanggan pada pesan dan dokumen diperiksa masing-masing.

1. Pada bagian yang sedang digunakan, centang pelanggan di **Pilih pelanggan**.
2. Untuk korespondensi, isi **Subjek** dan **Isi pesan** sesuai batas, lalu pilih **Lihat pratinjau**.
3. Jika status menyebut nama pelanggan dan kontak utama yang belum valid, buka **Daftar pelanggan**, perbaiki kontaknya, dan simpan dahulu.
4. Untuk dokumen, periksa kembali pratinjau pelanggan sebelum memakai **Cetak / simpan PDF** atau **Unduh PNG**.

### 12.8 Kalkulator meminta pilihan negara

**Pesan:** “Pilih sedikitnya satu negara dari daftar.”

**Penyebab:** tidak ada negara yang dicentang.

1. Pada **Kalkulator negara**, centang minimal satu negara pada **NEGARA TUJUAN** atau **NEGARA ASAL**, sesuai arah pengiriman.
2. Periksa isian lain, lalu pilih **Bandingkan total biaya →**.

### 12.9 Gambar tanda terima gagal dibuat atau diunduh

**Pesan yang dapat muncul:**

- “Gagal membuat gambar di browser ini.”
- “Gagal mengunduh PNG. Coba kurangi isi template.”

**Penyebab:** browser tidak dapat membuat gambar, atau proses menghasilkan/menyimpan gambar gagal. Isi template yang sangat panjang dapat menyulitkan pembuatan gambar.

1. Kurangi isi pada **Isi template**, lalu periksa pratinjau.
2. Pilih **Unduh PNG** lagi pada pelanggan yang benar.
3. Jika tetap gagal, gunakan browser lain yang mendukung pembuatan gambar. Ingat bahwa data pelanggan dan template tidak otomatis ikut pindah; siapkan kembali data latihan yang diperlukan.

### 12.10 Mengapa hasil quotation berbeda dari hitungan terbaru?

**Penyebab:** quotation memakai salinan hasil ketika terakhir kali Anda menekan tombol penawaran. Mengubah angka atau isian saja tidak memperbarui salinan tersebut. Total **Perbandingan harga** juga memang berbeda dasar hitungnya dari **Kalkulator negara**.

1. Bandingkan kembali pada menu asal.
2. Pilih hasil yang benar, lalu gunakan **Buat surat penawaran** atau **Buat surat penawaran →** sesuai menu.
3. Pada **Dokumen**, periksa penanda sumber, rute, dan total. Jika ingin memakai nilai contoh pelanggan, pilih **Pakai data contoh pelanggan**.

### 12.11 Mengapa email atau WhatsApp belum diterima pelanggan?

Tidak ada pesan yang dikirim oleh demo ini. **Lihat pratinjau** hanya menampilkan contoh. **Catat simulasi →** hanya menambah catatan di browser ini. Menyimpan PDF atau mengunduh PNG juga tidak mengirim dokumen. Untuk pekerjaan nyata, gunakan saluran komunikasi dan proses operasional resmi di luar demo.
