// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let area = (a,b) => {
    return a*b;
}
let result = area(16,50);
console.log(result)



// - створити функцію яка обчислює та повертає площу кола з радіусом r
let areacircle = (r) => {
    return Math.PI*r*r
}
let circle = areacircle(13);
console.log(circle)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let areaCylinder = (r,h) => {
    return 2*Math.PI*r*h;
}
let cylinder = areaCylinder(9,15)
console.log(cylinder)
// - створити функцію яка приймає масив та виводить кожен його елемент
let loop = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
    let myArray = ['a','b','c','d','i'];
    loop(myArray)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let paragraph = (text) =>{
    console.log(text)
    document.write(`<p>${text}</p>`)
}
let textArr = paragraph('how are you?')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let list = (listText) => {
        document.write(`<ul>`)
    for (let i = 0; i <3 ; i++) {
        document.write(`<li>${listText}</li>`)
    }
        document.write(`</ul>`)
}

let listArr = list(`Hello`)
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let listUniform = (text,count) => {
    document.write(`<ul>`)
    for (let i = 0; i < count; i++) {
        document.write (`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

let myList = listUniform('What is your name?',5)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let elements = (array) => {
    document.write(`<ul>`)
    for (let i = 0; i < array.length; i++) {
        document.write (`<li>${array[i]}</li>`)
    }
    document.write(`</ul>`)
}
let myElements = [10,30,'Hello', true,50,'Good morning', false]
elements(myElements)
console.log(myElements)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let object = (users) => {
    for (const user of users) {
        console.log(user)
        document.write(`<div>${user.id}</div>`)
        document.write(`<div>${user.name}</div>`)
        document.write(`<div>${user.age}</div>`)
    }
}
    let myUsers = [ { id: 1, name: 'Emily', age: 28 },
        { id: 2, name: 'David', age: 35 },
        { id: 3, name: 'Sophia', age: 27 },
        { id: 4, name: 'Michael', age: 29 },
        { id: 5, name: 'Emma', age: 31 },]

object(myUsers)


// - створити функцію яка повертає найменьше число з масиву
let numbers = (arrNumbers) => {
        let minNumber = arrNumbers[0]
    for (let i = 0; i < arrNumbers.length; i++) {
        if (arrNumbers[i]<  minNumber){
            minNumber = arrNumbers[i]
        }
    }
    console.log(minNumber)
    return minNumber
}
let myNumbers = [5,7,3,-17,8,2]
numbers(myNumbers)
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum =  (arr)=>{
        let result = 0
    for (let i = 0; i < arr.length; i++) {
        result +=  arr[i]
    }
    console.log(result)
    return result

}
let mySum = [5,8,15]
sum(mySum)
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr,index1,index2) => {
        let elements = arr[index1]
        arr[index1]=arr[index2]
        arr[index2]=elements
        console.log(arr)
        return(arr)
}
let mySwap = [5,8,-4,10]
swap(mySwap,1,0)
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (let i = 0; i < currencyValues.length; i++) {
        let resultSum = sumUAH/currencyValues[i].value
        if (currencyValues[i].currency === exchangeCurrency){
            console.log(resultSum)
            return  resultSum
        }

    }
}

let currencyValues = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}];
let sumUAH = 3000;
let exchangeCurrency = 'EUR';
exchange(sumUAH,currencyValues,exchangeCurrency)