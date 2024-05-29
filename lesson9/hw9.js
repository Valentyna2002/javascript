// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let f1 = document.getElementById('f1')
f1.onsubmit = function (ev) {
    ev.preventDefault()
    let name = this.name.value
    let surname = this.surname.value
    let age = this.age.value
    let user ={name,surname,age}
    localStorage.setItem('users', JSON.stringify(user))
    console.log(user)
    usersFunction(user)
    ev.target.reset()
}

let usersFunction = function (user){
    let usersBlock = document.getElementById('usersBlock')
    let userDiv = document.createElement('div')
    userDiv.innerText = `Name: ${user.name}, Surname: ${user.surname}, Age: ${user.age}`
    usersBlock.appendChild(userDiv)
}

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
window.onload = function () {
    let  number =  document.getElementById('number')
    let  changeNumber = JSON.parse(localStorage.getItem('number')) || 0
    let newNumber = changeNumber + 1
    number.innerText = newNumber
    localStorage.setItem('number',newNumber)
    console.log(newNumber)
}

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// let time = new Date().toLocaleString()
// let sessions = JSON.parse(localStorage.getItem('sessions')) || []
// sessions.push(time)
// localStorage.setItem('sessions',JSON.stringify(sessions))
//
// let sessionList = document.getElementById('sessionsList')
// sessions.forEach(function (session,index) {
//     let sessionBlock = document.createElement('div')
//     sessionBlock.innerText = 'Session ' + (index + 1) + ':  ' + session
//     sessionList.appendChild(sessionBlock)
//
// })
// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів


let arr = []
for (let i = 1; i <= 100; i++) {
    arr.push({ id: i, name: 'item' + i })
}
let arrPerPage = 10
let pageNumber = 0


function arrDisplay() {
    let startIndex = pageNumber * arrPerPage
    let endIndex = startIndex + arrPerPage
    let currentPageArr = arr.slice(startIndex,endIndex)

   let list= document.getElementById('list')
    list.innerHTML =''

    currentPageArr.forEach(item => {
        let arrElement = document.createElement('div')
        arrElement.innerHTML = 'Id:'+ item.id +  '  Name:' + item.name
            list.appendChild(arrElement)
})}
window.addEventListener('load',function (){
    arrDisplay()


document.getElementById('nextButton').addEventListener('click',function (){
    if (pageNumber<arr.length/arrPerPage-1){
        pageNumber ++
        arrDisplay()
    }
})
document.getElementById('prevButton').addEventListener('click',function (){
    if (pageNumber > 0){
        pageNumber --
        arrDisplay()
    }
})
})

//
//
//
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
let click = document.getElementById('buttonByText')
click.addEventListener('click', function (){
    let text = document.getElementById('text')
    if (text){
        text.remove()
    }
})
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let checkAge = document.getElementById('checkAge')
checkAge.addEventListener('click',function (){
    let ageText = document.getElementById('age2').value
    let age = ageText
    if (age < 18){
        alert('Ваш вік меньше 18')
    }
    else  {
        let textWelcome = document.getElementById('welcome')
        textWelcome.innerText = 'Welcome!'
    }

})
//
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
let buttonCreate = document.getElementById('buttonCreate')
buttonCreate.addEventListener('click',function (){
   let lines = document.getElementById('lines').value
    let column = document.getElementById('column').value
    let textContent = document.getElementById('textContent').value

    let table = document.createElement('table')
    for (let i = 0; i < lines; i++) {
        let tr = document.createElement('tr')
        for (let j = 0; j < column; j++) {
            let td = document.createElement('td')
            td.innerText = textContent
            tr.appendChild(td)
        }
       table.appendChild(tr)

    }
    let divForTable = document.getElementById('divForTable')
    divForTable.appendChild(table)
})

// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
// window.onload = function () {
//     let  number =  document.getElementById('number')
//     let  changeNumber = JSON.parse(localStorage.getItem('number')) || 0
//     let newNumber = changeNumber + 1
//     number.innerText = newNumber
//     localStorage.setItem('number',newNumber)
//     console.log(newNumber)
// }
window.addEventListener('load',function (){
    let priceDiv = document.getElementById('priceDiv')
    let changePrice = JSON.parse(localStorage.getItem('price')) || 100
    let lastUpdated = JSON.parse(localStorage.getItem('lastUpdated')) || 0;

    let time = Date.now()
    if (time - lastUpdated >10000){
        changePrice +=10
        localStorage.setItem('price',changePrice)
        localStorage.setItem('lastUpdated', time)
    }
    priceDiv.innerText = `${changePrice}грн`
})