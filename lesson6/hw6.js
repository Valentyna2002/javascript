// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let lenght = (string) => {
    console.log(string.length)
}
let string1 = lenght('hello world')
let string2 = lenght('lorem ipsum')
let string3 = lenght('javascript is cool')
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let upper = (string) => {
    let upperText = string.toUpperCase();
    console.log(upperText)
}
let upperstring1 = upper('hello world')
let upperstring2 = upper('lorem ipsum')
let upperstring3 = upper('javascript is cool')

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let lower = (string) => {
    let lowerText = string.toLowerCase();
    console.log(lowerText)
}
let lowerstring1 = lower('HELLO WORLD')
let lowerstring2 = lower('LOREM IPSUM')
let lowerstring3 = lower('JAVASCRIPT IS COOL')
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

 let str = ' dirty string   '
let strClean = str.trim();
console.log(strClean)

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let stringToarray = (str)  => {
    return  str.split(' ')
}
let arr  = 'Ревуть воли як ясла повні'
console.log(stringToarray(arr))
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10,8,-7,55,987,-1011,0,1050,0]
let map = numbers.map(number => String(number));
console.log(map)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
 let sortNums = (nums,direction) =>{
    if (direction === 'ascending') {
        return nums.toSorted((nums1,nums2)  => nums1 - nums2)
    }else (direction === 'descending')
     {return nums.toSorted((nums1,nums2)  => nums2 - nums1)
}}
let nums = [11,21,3];
console.log(sortNums(nums,'ascending'))
console.log(sortNums(nums,'descending'))
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortArr = coursesAndDurationArray.toSorted((a1,a2)=>{
    return (a1.monthDuration - a2.monthDuration)})
console.log(sortArr)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterArr = coursesAndDurationArray.filter(duration=> duration.monthDuration>5)
console.log(filterArr)
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mapArr = coursesAndDurationArray.map((course,index) => {
    return {id:index+1,...course}
})
console.log(mapArr)
// =========================
//     описати колоду карт (від 6 до туза без джокерів)

let cardSuits =['spade', 'diamond','heart', 'clubs']
let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']
let cardholder = cardSuits.reduce((acc,card)  => {
    values.forEach(item => {
        let color = (card === 'diamond' || card === 'heart') ? 'red' : 'black';
        acc.push({
            cardSuit: card,
            value:  item,
            color: color
        })
    })
   return acc
},[])
console.log(cardholder)
// - знайти піковий туз
let aceOfSpides = cardholder.find(card => card.cardSuit === 'spade' && card.value === 'ace')
console.log(aceOfSpides)
// - всі шістки
let sixes = cardholder.filter(card => card.value === '6' )
console.log(sixes)
// - всі червоні карти
let redCard = cardholder.filter(card => card.color === 'red')
console.log(redCard)
// - всі буби
let diamond = cardholder.filter(card => card.cardSuit === 'diamond')
console.log(diamond)
// - всі трефи від 9 та більше
let clubsCard = cardholder.filter(card => card.cardSuit === 'clubs' &&  (parseInt(card.value) >= 9 || card.value >= 'a'))
console.log(clubsCard);
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
let cardholderBySuit = cardholder.reduce((acc,card) => {
   if (card.cardSuit === 'spade'){
       acc.spades.push(card);}
       else if ( card.cardSuit === 'diamond'){
           acc.diamonds.push(card);}
       else if ( card.cardSuit === 'heart'){
        acc.hearts.push(card);}
       else if ( card.cardSuit === 'clubs'){
        acc.clubs.push(card)}
       return acc
},{ spades: [], diamonds: [], hearts: [], clubs: [] })
console.log(cardholderBySuit)
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
 let findSass = coursesArray.filter(course => course.modules.includes('sass'))
console.log(findSass)
// --написати пошук всіх об'єктів, в який в modules є docker
let findDocker = coursesArray.filter(course => course.modules.includes('docker'))
console.log(findDocker)
