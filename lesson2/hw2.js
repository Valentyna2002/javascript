// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let letters = ['a','b','c','d','e','f','g','h','i','j']
console.log(letters[0])
console.log(letters[1])
console.log(letters[2])
console.log(letters[3])
console.log(letters[4])
console.log(letters[5])
console.log(letters[6])
console.log(letters[7])
console.log(letters[8])
console.log(letters[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1  = {
    title:'Blown by the wind',
    pageCount:936,
    genre:'novel'
}
let book2  = {
    title:'The Great Gatsby',
    pageCount:188,
    genre:'novel'
}
let book3  = {
    title:'Don quixote',
    pageCount:704,
    genre:'novel'
}
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4  = {
    title:'Harry Pother',
    pageCount:248,
    genre:'fantasy',
    autors: ['Joanne Rowling', 58],
}
let book5  = {
    title:'The Little Prince',
    pageCount:64,
    genre:'tale',
    autors: ['Frances Hodgson',75]
}
let book6  = {
    title:'Pride and Prejudice',
    pageCount:384,
    genre:'novel',
    autors:['Jane Austen',42]
}
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {id:1,
    name:'Vasyl',
    username:'Vasyl',
    password:1111111
    },
    {id:2,
    name:'Kate',
    username:'Ekateryna',
    password:2222222
    },
    {id:3,
    name:'Valentyna',
    username:'Valia',
    password:3333333
    },
    {id:4,
    name:'Valentyn',
    username:'Valik',
    password:4444444
    },
    {id:5,
    name:'Vitaliy',
    username:'Vetal',
    password:55555555
    },
    {id:6,
    name:'Maria',
    username:'Mary',
    password:1111111
    },
    {id:7,
    name:'Veronika',
    username:'Vera',
    password:7777777
    },
    {
        id: 8,
        name: 'Vladyslav,',
        username: 'Vlad',
        password: 88888888
    },
    {id:9,
    name:'Anna',
    username:'Ania',
    password:99999999
    },
    {id:10,
    name:'Mykola',
    username:'Kolia',
    password:101010
    }
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
//
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let weather=[
    {day:'Monday',
     morning:'+5С',
     daytime:'+15С',
     evening:'+8С'
    },
    {day:'Tuesday',
     morning:'+2С',
     daytime:'+10С',
     evening:'+5С'
    },
    {day:'Wednesday',
     morning:'+8С',
     daytime:'+15С',
     evening:'+10С'
    },
    {day:'Thursday',
     morning:'+10С',
     daytime:'+25С',
     evening:'+15С'
    },
    {day:'Friday',
     morning:'+8С',
     daytime:'+18С',
     evening:'+10С'
    },
    {day:'Suturday',
     morning:'+9С',
     daytime:'+16С',
     evening:'+10С'
    },
    {day:'Sunday',
     morning:'+4С',
     daytime:'+9С',
     evening:'+5С'
    }
]
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x= 5;
if (x !== 0)
{console.log('True')}
else {console.log('False')}
let a = 1;
if (a !== 0)
{console.log('True')}
else {console.log('False')}
let b= 0;
if (b !== 0)
{console.log('True')}
else {console.log('False')}
let c= -3;
if (c !== 0)
{console.log('True')}
else {console.log('False')}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 50;
if (time>=0 && time<=15)
console.log('part1');
if (time>15 && time<=30)
console.log('part2');
if (time>30 && time<=45)
console.log('part3');
if (time>45 && time<=59)
console.log('part4');

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 15
if (day>=1 && day<=10)
{console.log('first')}
if (day>10 && day<=20)
{console.log('second')}
if (day>20 && day<=31)
{console.log('third')}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let schedule = 5
switch (schedule){
    case 1:
        console.log('Monday');
        break
    case 2:
        console.log('Tuesday');
        break
    case 3:
        console.log('Wednesday');
        break
    case 4:
        console.log('Thuesday');
        break
    case 5:
        console.log('Friday');
        break
    case 6:
        console.log('Suturday');
        break
    case 7:
        console.log('Sunday');
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let number1 = 40;
let number2 = 55;
if (number1>=number2)
console.log(number1)
else console.log(number2)

//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let x2= 0
if (!x2) {console.log('default')}
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if(coursesAndDurationArray [0].monthDuration>= 5)
{console.log('Super')} else{console.log('Bad')}
if(coursesAndDurationArray [1].monthDuration>= 5)
{console.log('Super')} else{console.log('Bad')}
if(coursesAndDurationArray [2].monthDuration>= 5)
{console.log('Super')} else{console.log('Bad')}
if(coursesAndDurationArray [3].monthDuration>= 5)
{console.log('Super')} else{console.log('Bad')}
if(coursesAndDurationArray [4].monthDuration>= 5)
{console.log('Super')} else{console.log('Bad')}
if(coursesAndDurationArray [5].monthDuration>= 5)
{console.log('Super')} else{console.log('Bad')}
