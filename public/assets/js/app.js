document.addEventListener("DOMContentLoaded", function() {

var dropdownButtons = document.querySelectorAll('.dropdown-button');

dropdownButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        var dropdownContent = this.nextElementSibling;
        var isOpen = dropdownContent.style.display === 'block';

        // Menutup semua dropdown content sebelum membuka yang terkait
        var allDropdownContents = document.querySelectorAll('.dropdown-content');
        allDropdownContents.forEach(function (dropdown) {
            dropdown.style.display = 'none';
        });

        // Membuka atau menutup dropdown content yang terkait
        dropdownContent.style.display = isOpen ? 'none' : 'block';
    });
});

window.addEventListener('click', function (e) {
    if (!e.target.matches('.dropdown-button')) {
        var dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(function (dropdown) {
            dropdown.style.display = 'none';
        });
    }
});
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
            this.querySelector('i').style.color = '#E57373';
        });
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function(registration) {
        console.log('Service Worker registered with scope:', registration.scope);
      }).catch(function(error) {
        console.log('Service Worker registration failed:', error);
      });
  }
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
