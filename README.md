## Оглавление
- [Задание #1](#задание-1)
- [Задание #2](#задание-2)


## **Задание #1**
Программа включает набор типизированных функций для выполнения следующих операций с  числами в десятичной, двоичной и шестнадцатеричной системах счисления. 
- сложение
- вычитание 
- умножение
- деление чисел
- нахождение корня из числа
- вычисление % от числа 
- перевод между этими системами
    
- вывод результатов для демонстрации через консоль

### **Установка и запуск**
1) Убедитесь, что у вас установлен Node.js. Вы можете проверить это, выполнив команду:
```bash
node -v
```
Если Node.js не установлен, скачайте и установите его с официального сайта. 

2) Склонируйте этот репозиторий себе на компьютер
```bash
https://github.com/lidasharova/React.git
```
3) Перейдите в директорию сохранённого проекта
```bash
cd React
```
4) Скомпилируйте файлы ts в js
```bash
tsc
```
5) Перейдите в папку dist:
```bash
cd dist
```
6) Запустите программу, используя команду:
```bash
node task1.js
```
Эта команда выполнит скрипт и выведет результаты арифметических операций в консоль.




## Задание #2

Программа включает набор типизированных интерфейсов для управления автомобилем.  
Она имеет:

- главный интерфейс - Car
- вспомогательные:
  - Двигатель - Engine
  - Топливная система - DieselSystem
  - Тормоза - Brakes
  - Колеса - Wheels
  - Система охлаждения - Cooling System  

В задании реализованы функции для вывода основной информации 
- об автомобиле (набрал скорость, в движении, остановился, сломался)  
- о состоянии различных деталей и устройств (колеса имеют недопустимо пониженное давление, двигатель перегрелся, тормоза неисправны)  
- обновления информации (двигатель охлаждён, тормоза исправны) и текущего состояния автомобиля (в движении/стоит/исправен/сломан/перегрет).

имеется вывод информации о происходящем в console.log, без пользовательского интерфейса  

### **Установка и запуск**

1) Убедитесь, что у вас установлен Node.js. Вы можете проверить это, выполнив команду:
```bash
node -v
```
Если Node.js не установлен, скачайте и установите его с официального сайта.

2) Склонируйте этот репозиторий себе на компьютер
```bash
https://github.com/lidasharova/React.git
```
3) Перейдите в директорию сохранённого проекта
```bash
cd React
```
4) Скомпилируйте файлы ts в js
```bash
tsc
```
5) Перейдите в папку dist:
```bash
cd dist
```
6) Запустите программу, используя команду:
```bash
node task2.js
```
Эта команда выполнит скрипт и выведет результаты арифметических операций в консоль.

