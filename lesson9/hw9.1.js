// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію


let time = new Date().toLocaleString()
let sessions = JSON.parse(localStorage.getItem('sessions')) || []
sessions.push(time)
localStorage.setItem('sessions',JSON.stringify(sessions))

let sessionList = document.getElementById('sessionsList')
sessions.forEach(function (session,index) {
    let sessionBlock = document.createElement('div')
    sessionBlock.innerText = 'Session ' + (index + 1) + ':  ' + session
    sessionList.appendChild(sessionBlock)

})