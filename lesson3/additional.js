// --створити масив з:
// - з 5 числових значень
let numericArray = [1, 2, 3, 4, 5];
for (const number of numericArray) {
    console.log(number)
}
// - з 5 стічкових значень
let stringArray = ["apple", "banana", "cherry", "date", "elderberry"];
for (const string of stringArray) {
    console.log(string)

}
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let mixedArray = ["apple", 123, true, "banana", 456, false, "cherry", 789, true, false];
for (const mixedArrayElement of mixedArray) {
    console.log(mixedArrayElement)
}
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let array = [];
array[0] = 1;
array[1] = true;
array[2] = 'Hello'
console.log(array)
//
//
//
//
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
let numbers = [2,17,13,6,22,31,45,66,100,-18];
let i=0
while (i<numbers.length){
    console.log(numbers[i]);
    i++
}
//     2. перебрати його циклом for
for (let j = 0; j < numbers.length; j++) {
    const number = numbers[j];
    console.log(number)
}
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let a=1
while (a<numbers.length){
    console.log(numbers[a])
    a += 2;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = 1; j < numbers.length; j +=2) {
    const number = numbers[j];
    console.log(number)

}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let b=0
while (b<numbers.length){
    console.log(numbers[b])
    b += 2;}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let j = 0; j < numbers.length; j+=2) {
    const number = numbers[j];
    console.log(number)
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] % 3 === 0) {numbers[j] = 'okten'}
}
console.log(numbers)

let arrNumb = [2,17,13,6,22,31,45,66,100,-18];
// 8. вивести масив в зворотньому порядку.
for (let j = arrNumb.length-1; j>0; j--) {
    console.log(arrNumb[j])

}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let myNumber = [1,2,3,5,7,9,6,8,12,-5]
for (let j = 0; j < myNumber.length; j++) {
    const myNumberElement = myNumber[j];
    console.log(myNumberElement)
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор