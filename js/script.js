(function () {
    window.addEventListener('load', function () {
        const footer = document.querySelector('.footer');

        if (footer) {
            let loadTime = 0;
            const navigationEntry = performance.getEntriesByType('navigation')[0];

            if (navigationEntry) {
                loadTime = navigationEntry.loadEventEnd - navigationEntry.startTime;
            }

            if (loadTime <= 0) {
                loadTime = performance.now();
            }

            const statsMessage = `Страница загрузилась за ${Math.round(loadTime)} мс.`;
            const statsElement = document.createElement('div');
            statsElement.textContent = statsMessage;
            statsElement.style.fontSize = '14px';
            statsElement.style.color = '#555';
            statsElement.style.marginTop = '10px';
            footer.appendChild(statsElement);
        }
    });
})();


(function () {
    // Обработка активного пункта меню на основе URL
    document.addEventListener('DOMContentLoaded', function () {
        const menuLinks = document.querySelectorAll('.menu li a'); // Все ссылки меню
        const currentPath = document.location.pathname.replace(/^\/web\//, ''); // Убираем /web/ из пути

        menuLinks.forEach((link) => {
            const linkPath = link.getAttribute('href');

            // Проверяем соответствие href текущему пути
            if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
                link.parentElement.classList.add('active'); // Добавляем класс к родительскому элементу
            }
        });
    });
})();
