# TechVault - Katalog Gadget & Aksesori Modern

TechVault adalah website katalog interaktif untuk produk teknologi modern seperti laptop, perangkat audio, dan aksesori. Website ini dirancang dengan struktur multi-halaman yang responsif, bersih, dan mudah dinavigasi.

---

## 📁 Struktur Folder Proyek

```text
techvault/
│
├── index.html       # Halaman Beranda / Hero Section
├── tentang.html     # Halaman Tentang Kami & Keunggulan
├── katalog.html     # Halaman Katalog Produk (disertai Filter & Modal Detail)
├── galeri.html      # Halaman Galeri Visual
├── kontak.html      # Halaman Form Kontak & Pertanyaan (disertai Validasi)
│
├── css/
│   └── style.css    # Stylesheet utama (Responsive Design & Styling)
│
└── js/
    └── script.js    # Script interaktivitas (Filter, Modal, Validasi Form, Back to Top)
```

---

## 🚀 Fitur Utama

1. **Multi-Page Navigation**:
   - Struktur website terpisah menjadi 5 halaman HTML terpisah (`index.html`, `tentang.html`, `katalog.html`, `galeri.html`, dan `kontak.html`).
   - Indikator menu aktif (`.active`) pada navbar untuk memudahkan navigasi pengguna.
   - Menu hamburger yang responsif untuk tampilan perangkat mobile.

2. **Katalog Produk Interaktif (`katalog.html`)**:
   - **Filter Kategori**: Menyaring produk berdasarkan kategori (Laptop, Audio, Aksesoris, atau Semua).
   - **Modal Pop-up Detail Spesifikasi**: Menampilkan popup detail produk saat tombol "Detail Spesifikasi" diklik tanpa berpindah halaman.

3. **Formulir Kontak dengan Validasi Dynamic (`kontak.html`)**:
   - Validasi input real-time/submit untuk Nama Lengkap, Email, dan Pesan.
   - **Live Character Counter**: Penghitung jumlah karakter pada kolom pesan secara langsung.
   - Pesan konfirmasi sukses setelah pengiriman form berhasil.

4. **Desain Responsif & Aksesibilitas**:
   - Layout fleksibel menggunakan Flexbox dan CSS Grid.
   - Fitur **Tombol Kembali ke Atas (Back to Top)** yang muncul otomatis saat pengguna melakukan *scroll* ke bawah.

---

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Struktur halaman web semantik.
- **CSS3**: Layouting (Flexbox & Grid), styling responsif (Media Queries), dan animasi transisi.
- **JavaScript (ES6+)**: Manipulasi DOM, validasi form, filter interaktif, dan penanganan event.
- **Google Fonts**: Font *Poppins* untuk tipografi modern dan bersih.

---

## 💻 Cara Menjalankan Proyek

1. **Clone atau Unduh Repository**:
   Unduh file proyek dan pastikan struktur folder sesuai dengan petunjuk di atas.

2. **Buka di Browser**:
   Buka file `index.html` menggunakan browser pilihan Anda (Google Chrome, Mozilla Firefox, Microsoft Edge, dll.).

3. **Gunakan Live Server (Opsional)**:
   Jika menggunakan **VS Code**, Anda dapat menginstal ekstensi *Live Server* lalu klik kanan pada `index.html` dan pilih **"Open with Live Server"**.

---

## 📝 Catatan Tugas
Proyek ini dikembangkan sebagai bagian dari Tugas / Praktikum Perancangan Web (Program Studi Sistem Informasi).
