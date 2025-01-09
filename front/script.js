document.addEventListener("DOMContentLoaded", function () {
    const headerUnder = document.querySelector('.header__under');
    const headerTopHeight = document.querySelector('.header__top').offsetHeight;
    const headerLinkTel = document.querySelector('.header__link-tel');

    window.addEventListener('scroll', function () {
        if (window.scrollY >= headerTopHeight) {
            headerUnder.classList.add('fixed');
        } else {
            headerUnder.classList.remove('fixed');
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const headerBackground = document.querySelector('.header__background');

// Массив с путями к изображениям
    const images = [
        './img/avto1.jpg',
        './img/avto3.jpg',
        './img/avto4.jpg',
    ];

    let currentIndex = 0;

    // Функция для смены изображения
    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length; // Циклический переход
        headerBackground.style.backgroundImage = `url('${images[currentIndex]}')`;
    }

    // Запускаем смену фона каждые 3 секунды
    setInterval(changeBackground, 5000);
});