// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area (a,b){
    let result = a * b;
    return result;
}
 let side = area(10,15)
  console.log (side)
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaCircle (r){
    let circle= Math.PI * r * r;
    return circle;
}
   let radius = areaCircle(5)
   console.log(radius)
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function areaCylinder(r,h) {
    let result =  2*Math.PI*r*h;
    return result;
}
   let cylinder = areaCylinder(5,10)
   console.log(cylinder)
// - створити функцію яка приймає масив та виводить кожен його елемент

 function loop(array) {
     for (const number of array) {
         console.log(number);
     }
 }
     let myArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    loop(myArray)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(text){
        console.log(text)
        document.write(`<p>${text}</p>`);

}
let documentText = 'hello'
paragraph(documentText)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list(p1,p2,p3){
        document.write(`<ul>
         <li>${p1}</li>
         <li>${p2}</li>
         <li>${p3}</li>`);


    }
    let listText  = list('First list','Second list','Third list')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function listUniform(text,count){
        console.log(arguments)
        for (let i = 0; i < count; i++) {
            document.write(`<ul>
               <li>${text}</li>
               </ul>`);}
}
        let myList = listUniform('Hello',3)


document.write(`------------------------------------`)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function listArray(arrText){
    document.write(`<ul>`)
    for (let i = 0; i < arrText.length; i++) {
        console.log(arrText[i])
        document.write(`<li>${arrText[i]}</li>`)}
    document.write(`</ul>`)
         }
let resultList = [10, "Hello", true, "Javascript", false]
listArray(resultList)
        
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function users(array){
    for (const arrayElement of array) {
        console.log(arrayElement)
        document.write(`<div>${arrayElement.id}</div>`)
        document.write(`<div>${arrayElement.name}</div>`)
        document.write(`<div>${arrayElement.age}</div>`)
    }
}
let userList = [
    {id: 1, name: "John", age: 30},
    {id: 2, name: "Anna", age: 25},
    {id: 3, name: "Peter", age: 40}]
    users(userList)

// - створити функцію яка повертає найменьше число з масиву
function minNumber(array){
    let arrMin = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < arrMin){
            arrMin = array[i];
        }
    }
    console.log(arrMin)
    return arrMin
}
let numbers = [4,2,3,1,9,5]
minNumber(numbers);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum (arr){
    let start = 0
    for (let i = 0; i < arr.length; i++) {
        start += arr[i]
    }
    return start
}
let sumNumber = [15,30,1,2,5]
let result = sum(sumNumber)
console.log(result)
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2){
    let elements =  arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = elements
    console.log(arr)
    return arr
}
let arr = [5,7,9,6]
swap(arr,0,1)


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')
function exchange (sumUAH, currencyValues, exchangeCurrency) {

    for (const currency of currencyValues) {
        let exchangeSuma = sumUAH / currency.value;
        if (currency.currency === exchangeCurrency){
          console.log(exchangeSuma)
           return  exchangeSuma
          }

    }
}
let currencyValues = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}];
let sumUAH = 500;
let exchangeCurrency = 'EUR';
exchange(sumUAH,currencyValues,exchangeCurrency)
