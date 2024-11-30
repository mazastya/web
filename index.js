document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.menu-toggle');  // Кнопка для открытия меню
    const menu = document.querySelector('.menu');  // Меню
    const mainContent = document.querySelector('.main');  // Основной контент

    // Проверяем, что кнопка существует, чтобы избежать ошибок
    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            // Переключаем класс 'show' на меню, чтобы отображать или скрывать меню
            menu.classList.toggle('show');

            // Добавляем или удаляем класс 'menu-open' для основного контента,
            // чтобы сдвигать его при открытом меню
            mainContent.classList.toggle('menu-open');
        });
    }

    // Функция для корректного отображения меню при изменении размера экрана
    function updateMenuState() {
        if (window.innerWidth > 768) {
            // На больших экранах меню всегда показывается, кнопка скрыта
            menu.classList.add('show');
            mainContent.classList.add('menu-open');  // Сдвигаем контент вниз
            toggleButton.style.display = 'none';  // Скрываем кнопку меню
        } else {
            // На мобильных устройствах меню скрыто, кнопка отображается
            menu.classList.remove('show');
            mainContent.classList.remove('menu-open');
            toggleButton.style.display = 'block';  // Показываем кнопку меню
        }
    }

    // Инициализация состояния меню при загрузке страницы
    updateMenuState();

    // Обновление состояния меню при изменении размера окна
    window.addEventListener('resize', updateMenuState);
});
