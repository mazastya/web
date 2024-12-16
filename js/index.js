document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const mainContent = document.querySelector('.main');

    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            menu.classList.toggle('show');

            mainContent.classList.toggle('menu-open');
        });
    }

    function updateMenuState() {
        if (window.innerWidth > 768) {
            menu.classList.add('show');
            mainContent.classList.add('menu-open');
            toggleButton.style.display = 'none';
        } else {
            menu.classList.remove('show');
            mainContent.classList.remove('menu-open');
            toggleButton.style.display = 'block';
        }
    }

    updateMenuState();

    window.addEventListener('resize', updateMenuState);
});
