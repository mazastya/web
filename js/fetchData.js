document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const errorMessage = document.getElementById('errorMessage');
    const dataTable = document.getElementById('dataTable');
    const dataTableBody = dataTable.querySelector('tbody');

    function showPreloader() {
        preloader.classList.remove('hidden');
        errorMessage.classList.add('hidden');
        dataTable.classList.add('hidden');
    }

    function hidePreloader() {
        preloader.classList.add('hidden');
    }

    function showError(message) {
        hidePreloader();
        errorMessage.textContent = `⚠ ${message}`;
        errorMessage.classList.remove('hidden');
    }

    function renderData(data) {
        hidePreloader();
        dataTableBody.innerHTML = '';

        data.forEach((item) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.title}</td>
                <td>${item.body}</td>
            `;
            dataTableBody.appendChild(row);
        });

        dataTable.classList.remove('hidden');
    }

    async function fetchData() {
        showPreloader();

        const randomFilter = Math.random() > 0.5 ? '?id_gte=100' : '?id_lte=200';

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts${randomFilter}`);
            if (!response.ok) {
                throw new Error(`HTTP ошибка: ${response.status}`);
            }

            const data = await response.json();
            renderData(data.slice(0, 10));
        } catch (error) {
            showError(error.message);
        }
    }

    fetchData();
});
