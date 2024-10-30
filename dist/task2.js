"use strict";
// Задание № 2
// Разработать типизированную систему управления автомобилем: главный интерфейс Car и вспомогательные интерфейсы для различных подсистем. Реализовать функции для вывода основной информации об авто, о состоянии различных деталей и устройств, обновления информации и текущего состояния автомобиля.
//
// Продемонстрировать работу создавая переменные и вызывая реализованные функции.
//
// Работа должна представлять собой скрипт выводящий информацию о происходящем в console.log, без пользовательского интерфейса.
//
const engine = {
    isOverheated: false,
    start: () => console.log("двигатель запущен"),
    stop: () => console.log("двигатель остановлен"),
    checkTemperature: () => (engine.isOverheated ? "двигатель перегрет" : "двигатель в порядке"),
};
const brakes = {
    isFunctional: true,
    onn: () => console.log("торможение"),
    off: () => console.log("торможение прекращено"),
    checkFunctional: () => console.log(`тормоза исправны ? - ${brakes.isFunctional ? "Да" : "Нет"}`),
};
const wheels = {
    pressure: 25,
    checkPressure: () => {
        const status = wheels.pressure >= 30 ? "давление в колесах - нормальное" : "внимание: давление в колесах пониженное!";
        console.log(status);
    },
    pumpUp: (pressure) => {
        wheels.pressure = pressure;
        console.log(`колеса накачаны до ${pressure} атмосфер`);
        wheels.checkPressure();
    },
};
const coolingSystem = {
    temperature: 50,
    coolDown: () => {
        console.log("система охлаждения активирована");
        coolingSystem.temperature -= 10;
        coolingSystem.checkTemperature();
    },
    checkTemperature: () => {
        const status = coolingSystem.temperature > 120 ? "перегрет" : "впорядке";
        console.log(`температура двигателя - ${coolingSystem.temperature} градусов. Двигатель - ${status}`);
    },
};
const dieselSystem = {
    amount: 30,
    getDiesel: (amount) => {
        console.log(`добавлено ${amount} литров топлива`);
        dieselSystem.amount += amount;
    },
    checkLevelDiesel: () => console.log(`в машине ${dieselSystem.amount} литров топлива`),
};
const car = {
    engine: engine,
    brakes: brakes,
    wheels: wheels,
    coolingSystem: coolingSystem,
    dieselSystem: dieselSystem,
    isMoving: false, // автомобиль стоит
    isFunctional: true, // автомобиль исправен
    start: function () {
        this.engine.start();
        this.isMoving = true;
        console.log("автомобиль заведен и в движении");
    },
    stop: function () {
        this.engine.stop();
        this.isMoving = false;
        console.log("автомобиль остановлен");
    },
    getSpeed: function (speed) {
        if (this.isFunctional) {
            console.log(`автомобиль разгоняется до скорости ${speed} км/ч.`);
        }
        else {
            console.log("автомобиль не исправен, разгон невозможен");
        }
    },
    getSlow: function () {
        if (this.isMoving) {
            this.brakes.onn();
            console.log("автомобиль тормозит");
        }
        else {
            console.log("автомобиль уже остановлен");
        }
    },
    checkStatus: function () {
        console.log("------------------------------- СОСТОЯНИЕ АВТОМОБИЛЯ ----------------------");
        this.coolingSystem.checkTemperature();
        this.brakes.checkFunctional();
        this.wheels.checkPressure();
        this.dieselSystem.checkLevelDiesel();
        console.log("----------------------------------------------------------------------------");
    },
};
// Демонстрация работы
console.log("--------------------------- Демонстрация работы автомобиля ----------------------");
car.checkStatus();
car.wheels.pumpUp(35);
car.start();
car.getSpeed(60);
car.coolingSystem.coolDown();
car.getSlow();
car.stop();
car.dieselSystem.getDiesel(20);
car.checkStatus();
car.start();
car.getSpeed(90);
console.log("удачного путешествия!");
