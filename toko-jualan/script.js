document.querySelectorAll('.produk 1').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah link default
        const notification = document.getElementById('notification');
        notification.style.display = 'block'; // Tampilkan notifikasi

        // Sembunyikan notifikasi setelah 6 detik
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);

        // Redirect ke link WhatsApp
        window.open(this.href, '_blank');
    });
});