// Задание № 3
//Разработать типизированную систему управления банковскими счетами, где каждый счет может быть дебетовым или кредитным с различными условиями обслуживания. В системе должны быть: интерфейс Account, который описывает общие свойства банковского счета, и классы DebitAccount и CreditAccount, которые отвечают за функциональность разных типов счетов. Реализовать операции пополнения и снятия средств, проверки баланса и текущего долга.
//Продемонстрировать работу создавая переменные и вызывая реализованные функции и методы.
//Работа должна представлять собой скрипт выводящий информацию о происходящем в console.log, без пользовательского интерфейса.

// общий интерфейс с базовыми методами
interface Account {
    deposit(amount: number): void; // пополнение
    withdraw(amount: number): boolean; // снятие
    getBalance(): number; // получение баланса
}

// класс для дебетового счета - где можно тратить только деньги, которые есть на балансе.
class DebitAccount implements Account {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            console.log("сумма пополнения должна быть положительной");
            return;
        }
        this.balance += amount;
    }

    withdraw(amount: number): boolean {
        if (amount <= 0) {
            console.log("сумма снятия должна быть положительной")
            return false;
        }
        if (amount > this.balance) {
            console.log("недостаточно средств на счете");
            return false;
        }
        this.balance -= amount;
        return true;
    }

    getBalance(): number {
        return this.balance;
    }
}

// класс для кредитного счета - где можно тратить больше денег, чем есть на балансе, в пределах кредитного лимита.
class CreditAccount implements Account {
    private balance: number;
    private readonly creditLimit: number; // макс сумма, которую можно занять в кредит
    private debt: number; //сумма задолженности пользователя (сколько он потратил банковских денег)

    constructor(initialBalance: number, creditLimit: number) {
        if (creditLimit < 0) {
            console.log("кредитный лимит не может быть отрицательным");
        }
        this.creditLimit = creditLimit;
        this.balance = initialBalance;
        this.debt = 0;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            console.log("сумма пополнения должна быть положительной");
            return;
        }
        if (this.debt > 0) {
            const payment = Math.min(amount, this.debt);
            this.debt -= payment;
            amount -= payment;
        }
        this.balance += amount;
    }

    withdraw(amount: number): boolean {
        if (amount <= 0) {
            console.log("сумма снятия должна быть положительной");
            return false;
        }
        if (amount > (this.balance + this.creditLimit - this.debt)) {
            console.log("превышен кредитный лимит");
            return false;
        }
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            const remaining = amount - this.balance; // сколько не хватает для снятия
            this.balance = 0;
            this.debt += remaining; // добавляем к долгу
        }
        return true;
    }

    getDebt(): number {
        return this.debt;
    }

    getBalance(): number {
        return this.balance;
    }
}

// ДЕМОНСТРАЦИЯ

console.log("\n--------------Создание дебетового счета с начальными средствами---------------------");
const debitAccount = new DebitAccount(1000);
console.log("Баланс дебетового счета:", debitAccount.getBalance());
debitAccount.deposit(500);
console.log("Баланс после пополнения на 500:", debitAccount.getBalance());
debitAccount.withdraw(200);
console.log("Баланс после снятия 200:", debitAccount.getBalance());
console.log("Попытка снятия суммы больше текущего баланса:");
debitAccount.withdraw(1500);


console.log("\n--------------Создание кредитного счета с начальными средствами и кредитным лимитом-------------");
// Создание кредитного счета с начальными средствами и кредитным лимитом
const creditAccount = new CreditAccount(500, 1000);
console.log("Баланс кредитного счета:", creditAccount.getBalance());
console.log("Сумма долга кредитного счета:", creditAccount.getDebt());
creditAccount.withdraw(800); // Снимаем больше, чем есть на балансе, используя кредит
console.log("Баланс после снятия 800:", creditAccount.getBalance());
console.log("Долг после снятия 800:", creditAccount.getDebt());
creditAccount.deposit(300); // Пополняем счет, погашаем часть долга
console.log("Баланс после пополнения на 300:", creditAccount.getBalance());
console.log("Долг после пополнения на 300:", creditAccount.getDebt());
console.log("Пополняем счет на 450:", creditAccount.getDebt());
creditAccount.deposit(450);
console.log("Баланс после пополнения:", creditAccount.getBalance());

