document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('orderForm');
    const tableContainer = document.getElementById('orderTableContainer');
    const loadButton = document.getElementById('loadOrders');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Отмена стандартного поведения формы

        const orderCount = document.getElementById('orderCount').value;
        const startDate = document.getElementById('startDate').value;
        const title = document.getElementById('orderTitle').value;

        const newOrder = { orderCount, startDate, title };

        saveOrderToLocalStorage(newOrder);

        displaySingleOrder(newOrder);
    });

    loadButton.addEventListener('click', loadOrdersFromLocalStorage);

    function saveOrderToLocalStorage(order) {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));
    }

    function displaySingleOrder(order) {
        tableContainer.innerHTML = ''; // Очищаем старую таблицу

        const table = document.createElement('table');
        table.classList.add('order-table');
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Заголовок</th>
                    <th>Дата начала</th>
                    <th>Количество</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${order.title}</td>
                    <td>${order.startDate}</td>
                    <td>${order.orderCount}</td>
                </tr>
            </tbody>
        `;
        tableContainer.appendChild(table);
    }

    function loadOrdersFromLocalStorage() {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        tableContainer.innerHTML = ''; // Очищаем старую таблицу

        if (orders.length === 0) {
            tableContainer.innerHTML = '<p>Нет сохранённых заказов.</p>';
            return;
        }

        const table = document.createElement('table');
        table.classList.add('order-table');
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Заголовок</th>
                    <th>Дата начала</th>
                    <th>Количество</th>
                </tr>
            </thead>
            <tbody>
                ${orders
            .map(
                (order) => `
                    <tr>
                        <td>${order.title}</td>
                        <td>${order.startDate}</td>
                        <td>${order.orderCount}</td>
                    </tr>`
            )
            .join('')}
            </tbody>
        `;
        tableContainer.appendChild(table);
    }
});
