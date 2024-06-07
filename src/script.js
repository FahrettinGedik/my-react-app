// Formu gönderirken çalışacak olan işlev
document.getElementById('example-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun varsayılan gönderim işlemini durdur

    // Form alanlarını al
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Form doğrulama
    if (!name || !email || !message) {
        alert('Lütfen tüm alanları doldurun.');
        return;
    }

    // E-posta doğrulama (basit bir kontrol)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Lütfen geçerli bir e-posta adresi girin.');
        return;
    }

    // Başarılı gönderim mesajı
    alert('Form başarıyla gönderildi!');

    // Formu temizle
    document.getElementById('example-form').reset();
});

// Liste elemanlarına tıklama olayını ekle
const listItems = document.querySelectorAll('.list-item');
listItems.forEach(item => {
    item.addEventListener('click', () => {
        alert(item.textContent + ' tıklandı!');
    });
});

// Buton tıklama olayını ekle
document.querySelector('.button').addEventListener('click', function() {
    alert('Butona tıklandı!');
});
