document.addEventListener('DOMContentLoaded', () => {

    // ===============================================
    // FITUR 1: Navigasi Menu Mobile (Hamburger Menu)
    // ===============================================
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Menutup menu mobile ketika salah satu link diklik
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // ===============================================
    // FITUR 2: Filter Produk Interaktif
    // ===============================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Ubah button aktif
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.getAttribute('data-category');

            // Sembunyikan/Tampilkan produk sesuai kategori
            productCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // ===============================================
    // FITUR 3: Validasi Form Kontak & Counter Karakter
    // ===============================================
    const contactForm = document.getElementById('contactForm');
    const namaInput = document.getElementById('nama');
    const emailInput = document.getElementById('email');
    const pesanInput = document.getElementById('pesan');
    const charCount = document.getElementById('charCount');
    const formSuccess = document.getElementById('formSuccess');

    // Live Character Counter
    pesanInput.addEventListener('input', () => {
        const count = pesanInput.value.length;
        charCount.textContent = count;
    });

    // Validasi saat Form Di-submit
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Validasi Nama
        if (namaInput.value.trim().length < 3) {
            document.getElementById('namaError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('namaError').style.display = 'none';
        }

        // Validasi Email
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailInput.value.match(emailPattern)) {
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('emailError').style.display = 'none';
        }

        // Validasi Pesan
        if (pesanInput.value.trim().length < 10) {
            document.getElementById('pesanError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('pesanError').style.display = 'none';
        }

        // Tampilkan pesan berhasil jika semua valid
        if (isValid) {
            formSuccess.style.display = 'block';
            contactForm.reset();
            charCount.textContent = '0';
            setTimeout(() => {
                formSuccess.style.display = 'none';
            }, 5000);
        }
    });

    // ===============================================
    // FITUR 4: Tombol Back to Top
    // ===============================================
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// ===============================================
// FITUR MODAL POPUP (Fungsi Global)
// ===============================================
function showModal(title, desc, price) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDesc').textContent = desc;
    document.getElementById('modalPrice').textContent = price;
    document.getElementById('productModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

// Tutup modal jika user mengklik area di luar kotak modal
window.addEventListener('click', (e) => {
    const modal = document.getElementById('productModal');
    if (e.target === modal) {
        closeModal();
    }
});