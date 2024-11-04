"use strict";
// Задание № 3
//Разработать типизированную систему управления интернет-магазином:
// главные классы - Order (заказ), Product (товар) и Cart (корзина),
// класс OrderManager для управления заказами и ProductManager для управления товарами,
// и различные вспомогательные классы и интерфейсы по необходимости.
// Реализовать методы для просмотра информации о товарах, управления товарами, добавления и удаления товаров из корзины, просмотра текущей корзины, добавления нового заказа, смены статуса заказа, вывода информации о заказах.
// Продемонстрировать работу создавая переменные и вызывая реализованные функции и методы.
// Работа должна представлять собой скрипт выводящий информацию о происходящем в console.log, без пользовательского интерфейса.
// для управление товарами
class ProductManager {
    constructor() {
        this.products = [];
    }
    // добавление товара
    addProduct(product) {
        this.products.push(product);
        console.log(`добавили товар: '${product.name}' в каталог магазина`);
    }
    // удаление товара
    removeProduct(productId) {
        this.products = this.products.filter(product => product.id !== productId);
        console.log(`удалили товар с id:${productId} из каталога`);
    }
    // просмотр всех товаров
    listProducts() {
        console.log("\nсписок всех товаров в каталоге:");
        this.products.forEach(product => {
            console.log(`id: ${product.id}, наименование: '${product.name}', цена: ${product.price} руб.`);
        });
    }
    // получение товара по id
    getProductById(productId) {
        return this.products.find(product => product.id === productId);
    }
}
// класс для корзины
class Cart {
    constructor() {
        this.items = [];
    }
    // добавление товара в корзину
    addProduct(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        }
        else {
            this.items.push({ product, quantity });
        }
        console.log(`\nдобавили ${quantity} шт. товара под наименованием: '${product.name}' в Вашу корзину.`);
    }
    // удаление товара из корзины
    removeProduct(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
        console.log(`удалили товар с id ${productId} из корзины`);
    }
    // просмотр содержимого корзины
    viewCart() {
        console.log("\nв Вашей корзине:");
        if (this.items.length === 0) {
            console.log("в корзине пока нет товаров");
        }
        else {
            this.items.forEach(item => {
                console.log(`${item.product.name}, кол-во: ${item.quantity}, цена: ${item.product.price} руб.`);
            });
        }
    }
    // полное очистка корзины
    clearCart() {
        this.items = [];
        console.log("Корзина очищена");
    }
    // получение суммы ИТОГО в корзине
    getTotal() {
        return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
}
// для управления заказами
class OrderManager {
    constructor() {
        this.orders = [];
        this.orderIdCounter = 1;
    }
    // добавление нового заказа
    addOrder(cart) {
        const items = cart['items']; // получили содержимое всей корзины
        const total = cart.getTotal(); // получили сумму заказа
        const newOrder = {
            id: this.orderIdCounter++,
            items,
            total,
            status: "Pending",
        };
        this.orders.push(newOrder);
        console.log(`новый заказ с id ${newOrder.id} создан. Общая сумма Вашего заказа: ${newOrder.total} руб.`);
        cart.clearCart(); // очистили корзину после заказа
    }
    // смена статуса заказа
    updateOrderStatus(orderId, newStatus) {
        const order = this.orders.find(order => order.id === orderId);
        if (order) {
            order.status = newStatus;
            console.log(`статус заказа с id ${orderId} изменен на ${newStatus}.`);
        }
        else {
            console.log(`заказ с id ${orderId} не существует`);
        }
    }
    // просмотр всех заказов юзера
    listOrders() {
        console.log("\nСписок заказов:");
        if (this.orders.length === 0) {
            console.log("заказов нет");
        }
        else {
            this.orders.forEach(order => {
                console.log(`id заказа: ${order.id}, статус: ${order.status}, сумма заказа: ${order.total} руб.`);
            });
        }
    }
}
// ДЕМОНСТРАЦИЯ
// создаем экземпляры
const productManager = new ProductManager();
const cart = new Cart();
const orderManager = new OrderManager();
// добавим товары в каталог магазина
console.log(`\n--------ДОБАВИМ ТОВАРЫ В КАТАЛОГ МАГАЗИНА-----`);
productManager.addProduct({ id: 3, name: "Джинсы", price: 4500, description: "Мужские джинсы классического кроя, синего цвета, выполненные из прочного денима. Идеально подходят для повседневной носки." });
productManager.addProduct({ id: 4, name: "Пуховик", price: 12000, description: "Женский зимний пуховик с капюшоном, наполнитель - натуральный пух. Защищает от холода до -25°C. Водонепроницаемая внешняя ткань с защитой от ветра." });
productManager.addProduct({ id: 5, name: "Рубашка", price: 2500, description: "Мужская рубашка с длинным рукавом, выполненная из легкого хлопка. Белый цвет, классический воротник, удобный крой для повседневного использования и офисных мероприятий." });
productManager.addProduct({ id: 6, name: "Спортивные леггинсы", price: 2000, description: "Женские спортивные леггинсы из эластичной ткани, обеспечивающие комфорт и свободу движений во время тренировок. Вставки для дополнительной вентиляции." });
productManager.addProduct({ id: 7, name: "Куртка-ветровка", price: 3500, description: "Мужская куртка-ветровка с водоотталкивающим покрытием. Подходит для межсезонья, легкая и удобная, с внутренним карманом и регулируемыми манжетами." });
// проверим что корзина пока пуста
cart.viewCart();
// получим список товаров в каталоге
productManager.listProducts();
// найдем товары по id
const product1 = productManager.getProductById(1);
const product2 = productManager.getProductById(2);
const product5 = productManager.getProductById(5);
// если нашлись такие товары - добавим их в корзину
if (product1)
    cart.addProduct(product1, 2);
if (product2)
    cart.addProduct(product2, 1);
if (product5)
    cart.addProduct(product5, 1);
// просмотрим содержимое корзины
cart.viewCart();
console.log(`\nИТОГО: ${cart.getTotal()} руб. сумма товаров в Вашей корзине`);
// оформим заказ
console.log(`\nОФРМЛЯЕМ ЗАКАЗ`);
orderManager.addOrder(cart);
// посмотрим список заказов
orderManager.listOrders();
// обновим статус заказа
orderManager.updateOrderStatus(1, "Delivered");
orderManager.listOrders();
