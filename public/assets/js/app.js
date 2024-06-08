document.addEventListener("DOMContentLoaded", function() {
    // Memilih semua tombol navigasi di bagian bawah
    var bottomNavButtons = document.querySelectorAll('.bottom-navbar .nav-button');
    // Memilih tombol kembali
    var backButton = document.querySelector('.back-button');

    // Mengambil URL saat ini
    var currentUrl = window.location.href;

    // Menambahkan event listener ke tombol kembali
    backButton.addEventListener('click', function() {
        window.history.back(); // Kembali ke halaman sebelumnya
    });

    // Menambahkan event listener ke setiap tombol navigasi di bagian bawah
    bottomNavButtons.forEach(function(button) {
        var buttonUrl = button.getAttribute('href');

        // Memeriksa apakah URL tombol cocok dengan URL saat ini
        if (currentUrl === buttonUrl) {
            // Mengubah warna ikon menjadi merah jika URL tombol cocok dengan URL saat ini
            button.querySelector('i').style.color = '#E57373';
        }

        // Menambahkan event listener untuk event mouseover (hover)
        button.addEventListener('mouseover', function() {
            // Mengubah warna ikon menjadi merah saat tombol dihover
            this.querySelector('i').style.color = '#81D4FA';
        });

        // Menambahkan event listener untuk event mouseout (keluar dari hover)
        button.addEventListener('mouseout', function() {
            // Mengembalikan warna ikon menjadi abu-abu saat keluar dari hover, kecuali jika tombol aktif
            if (currentUrl !== buttonUrl) {
                this.querySelector('i').style.color = '#4242427c';
            }
        });

        // Menambahkan event listener untuk klik
        button.addEventListener('click', function() {
            // Menghapus class 'active' dari semua tombol
            bottomNavButtons.forEach(function(btn) {
                btn.classList.remove('active');
                btn.querySelector('i').style.color = '#4242427c';
            });

            // Menambahkan class 'active' pada tombol yang diklik
            this.classList.add('active');
            this.querySelector('i').style.color = '#E57373';
        });
    });
});
