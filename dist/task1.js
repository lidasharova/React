"use strict";
// Задание № 1
// Реализовать набор типизированных функций для приложения «калькулятор» – функции для выполнения арифметических операций, которые могут работать с числами в десятичной, двоичной и шестнадцатеричной системах счисления.
// Продемонстрировать работу создавая переменные и вызывая реализованные функции.
// Работа должна представлять собой скрипт выводящий информацию о происходящем в console.log, без пользовательского интерфейса.
// десятичной - 5,10, 256,
// двоичной - 1010
// шестнадцатеричной - 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F
// базовые функции калькулятора
// и операции с десятичными числами
function plus(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}
function percent(total, a) {
    if (total === 0) {
        console.log("процент от 0 невозможен.");
    }
    if (isNaN(total) || isNaN(a)) {
        console.log("Неверные аргументы: оба аргумента должны быть числами.");
    }
    return (a * 100) / total;
}
function mult(a, b) {
    return a * b;
}
function root(a) {
    if (a < 0) {
        console.log("Корень из отрицательного числа не определен.");
    }
    return Math.sqrt(a);
}
function divide(a, b) {
    if (b === 0) {
        console.log("Деление на 0 невозможно.");
    }
    return a / b;
}
// перевод в десятичную систему счисления (value - число, system - система исчисления в которой число)
function toDecimal(value, system) {
    return parseInt(value, system);
}
// перевод десятичного числа в другую систему (value - число, system - система исчисления в которую преобразовать)
function fromDecimal(value, system) {
    return value.toString(system).toUpperCase();
}
// перевод в двоичную систему
function decimalToBinary(decimal) {
    return decimal.toString(binarySystem);
}
function hexToBinary(hex) {
    const decimal = toDecimal(hex, hexSystem);
    return decimalToBinary(decimal);
}
// перевод в шестнадцатеричную систему
function decimalToHex(decimal) {
    return decimal.toString(hexSystem).toUpperCase(); // Приводим к верхнему регистру для соответствия
}
function binaryToHex(binary) {
    const decimal = toDecimal(binary, binarySystem);
    return decimalToHex(decimal);
}
// операции с двоичными числами
const binarySystem = 2;
function calculateBinary(a, b, operation) {
    const decimalA = toDecimal(a, binarySystem);
    const decimalB = toDecimal(b, binarySystem);
    const resultDecimal = operation(decimalA, decimalB);
    return fromDecimal(resultDecimal, binarySystem);
}
// ф-ция для вычисления корня с одним параметром
function rootBinary(a) {
    const decimalA = toDecimal(a, binarySystem);
    const resultDecimal = root(decimalA);
    return fromDecimal(resultDecimal, binarySystem);
}
// ф-ция нахождения процента для двоич и шетнадцатиричн системы (аргументы строки)
function percentBinaryHex(a, b, system) {
    const decimalA = toDecimal(a, system);
    const decimalB = toDecimal(b, system);
    const resultDecimal = percent(decimalA, decimalB);
    return fromDecimal(resultDecimal, system);
}
// операции с шестнадцатеричными числами
const hexSystem = 16;
function calculateHex(a, b, operation) {
    const decimalA = toDecimal(a, hexSystem);
    const decimalB = toDecimal(b, hexSystem);
    const resultDecimal = operation(decimalA, decimalB);
    return fromDecimal(resultDecimal, hexSystem);
}
// ф-ция для вычисления корня с одним параметром
function rootHex(a) {
    const decimalA = toDecimal(a, hexSystem);
    const resultDecimal = root(decimalA);
    return fromDecimal(resultDecimal, hexSystem);
}
// Демонстрация
const negativeNum = -16; // Пример отрицательного числа
const decimalNum1 = 25;
const decimalNum2 = 5;
const binaryNum1 = "1110";
const binaryNum2 = "1010";
const hexNum1 = "F";
const hexNum2 = "A";
console.log(`--------------------------------------------------------`);
console.log(`Перевод чисел в другую систему`);
console.log(`перевод двоичного числа ${binaryNum1} в десятичную систему - ${toDecimal(binaryNum1, binarySystem)}`);
console.log(`перевод шестнадцатеричного числа ${hexNum1} в десятичную систему - ${toDecimal(hexNum1, hexSystem)}`);
console.log(`перевод десятичного числа ${decimalNum1} в двоичную систему - ${decimalToBinary(decimalNum1)}`);
console.log(`перевод шестнадцатеричного числа ${hexNum1} в двоичную систему - ${hexToBinary(hexNum1)}`);
console.log(`перевод десятичного числа ${decimalNum1} в шестнадцатеричную систему - ${decimalToHex(decimalNum1)}`);
console.log(`перевод двоичного числа ${hexNum1} в шестнадцатеричную систему - ${binaryToHex(binaryNum1)}`);
// Операции с десятичными числами
console.log(`--------------------------------------------------------`);
console.log(`Операции с десятичными числами: ${decimalNum1} и ${decimalNum2}`);
console.log(`Сложение: ${decimalNum1} + ${decimalNum2} = ${plus(decimalNum1, decimalNum2)}`);
console.log(`Вычитание: ${decimalNum1} - ${decimalNum2} = ${minus(decimalNum1, decimalNum2)}`);
console.log(`Умножение: ${decimalNum1} * ${decimalNum2} = ${mult(decimalNum1, decimalNum2)}`);
console.log(`Деление: ${decimalNum1} / ${decimalNum2} = ${divide(decimalNum1, decimalNum2)}`);
console.log(`Корень из ${decimalNum1} равен ${root(decimalNum1)}`);
try {
    console.log(`Корень из числа ${negativeNum}: ${root(negativeNum)}`);
}
catch (error) {
    console.log(`Корень из отрицательного числа ${negativeNum} : ${error.message}`);
}
console.log(`Процент числа ${decimalNum2} от ${decimalNum2} -  ${percent(decimalNum2, decimalNum2)}%`);
// Операции с двоичными числами
console.log(`--------------------------------------------------------`);
console.log(`Операции с двоичными числами: ${binaryNum1} и ${binaryNum2}`);
console.log(`Сложение: ${binaryNum1} + ${binaryNum2} = ${calculateBinary(binaryNum1, binaryNum2, plus)}`);
console.log(`Вычитание: ${binaryNum1} - ${binaryNum2} = ${calculateBinary(binaryNum1, binaryNum2, minus)}`);
console.log(`Умножение: ${binaryNum1} * ${binaryNum2} = ${calculateBinary(binaryNum1, binaryNum2, mult)}`);
console.log(`Деление: ${binaryNum1} / ${binaryNum2} = ${calculateBinary(binaryNum1, binaryNum2, divide)}`);
console.log(`Процент числа ${binaryNum1} от ${binaryNum2}: ${percentBinaryHex(binaryNum1, binaryNum2, binarySystem)}`);
console.log(`Корень числа ${binaryNum1} равен ${rootBinary(binaryNum1)}`);
// Операции с шестнадцатеричными числами
console.log(`--------------------------------------------------------`);
console.log(`Операции с шестнадцатеричными числами: ${hexNum1} и ${hexNum2}`);
console.log(`Сложение: ${hexNum1} + ${hexNum2} = ${calculateHex(hexNum1, hexNum2, plus)}`);
console.log(`Вычитание: ${hexNum1} - ${hexNum2} = ${calculateHex(hexNum1, hexNum2, minus)}`);
console.log(`Умножение: ${hexNum1} * ${hexNum2} = ${calculateHex(hexNum1, hexNum2, mult)}`);
console.log(`Деление: ${hexNum1} / ${hexNum2} = ${calculateHex(hexNum1, hexNum2, divide)}`);
console.log(`Процент числа ${hexNum1} от ${hexNum2}: ${percentBinaryHex(hexNum1, hexNum2, hexSystem)}`);
console.log(`Корень числа ${hexNum1} равен ${rootHex(hexNum1)}`);
