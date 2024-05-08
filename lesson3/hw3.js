// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
 let text = [
        'bread',
        'milk',
        'cheese',
        'hummus',
        'butter',
        'noodles',
        'meat',
        'fish',
        'bacon',
        'coffe'
 ];
for (let i = 0; i < text.length; i++) {
       console.log(text[i]);
       document.write(`<div>${text[i]}</div>`)
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

let text2 = [
       'bread',
       'milk',
       'cheese',
       'hummus',
       'butter',
       'noodles',
       'meat',
       'fish',
       'bacon',
       'coffe'
];
for (let i = 0; i < text2.length; i++)
       {
       console.log(i + ': ' + text2[i]);
       document.write(`<div>${i}${': '}${text2[i]} </div>`)
       }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let books = [
       'Whispers of the Forgotten',
       'Echoes of Eternity',
       'Shadows of the Crescent Moon',
       'The Starlight Chronicles',
       'Lost in the Labyrinth',
       'Beyond the Veil',
       'Wanderers of the Wildwood',
       'Sands of Time',
       'The Last Ember',
       'Voices from the Abyss',
       'The Enchanted Codex',
       'Tales of the Twilight Realm',
       'The Frozen Odyssey',
       'Echoes of Destiny',
       'Secrets of the Celestial Realm',
       'Chronicles of the Everlasting',
       'Whispers from the Deep',
       'Legends of the Hidden Temple',
       'Songs of the Starlit Sky',
       'The Forgotten Kingdom']
let i = 0 ;
while (i<books.length){
       console.log(books[i]);
       i++;
       document.write(`<h1>${books[i-1]}</h1>`)
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let books2 =[
       'Whispers of the Forgotten',
       'Echoes of Eternity',
       'Shadows of the Crescent Moon',
       'The Starlight Chronicles',
       'Lost in the Labyrinth',
       'Beyond the Veil',
       'Wanderers of the Wildwood',
       'Sands of Time',
       'The Last Ember',
       'Voices from the Abyss',
       'The Enchanted Codex',
       'Tales of the Twilight Realm',
       'The Frozen Odyssey',
       'Echoes of Destiny',
       'Secrets of the Celestial Realm',
       'Chronicles of the Everlasting',
       'Whispers from the Deep',
       'Legends of the Hidden Temple',
       'Songs of the Starlit Sky',
       'The Forgotten Kingdom']
let a = 0
while (a<books2.length){
       console.log(a + ': ' + books2[a]);
       a++;
       document.write(`<h1>${a}${': '}${books2[a-1]}</h1>`)
}
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//            <li>ITEM OF ARRAY</li>
//            <!--
//                і тд інші об'єкти масиву
//                 ...
//                 ...
//                 ...
//            -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
let listOfItems = ['html', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`)
for (const listOfItem of listOfItems) {
       console.log(listOfItem)
       document.write(`<li>${listOfItem}</li>`)
}
document.write(`</ul>`)

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// let products = [
//        {
//               title: 'milk',
//               price: 22,
//               image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//        },
//        {
//               title: 'juice',
//               price: 27,
//               image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//        },
//        {
//               title: 'tomato',
//               price: 47,
//               image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//        },
//        {
//               title: 'tea',
//               price: 15,
//               image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//        },
// ];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

let products = [
       {
              title: 'milk',
              price: 22,
              image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
       },
       {
              title: 'juice',
              price: 27,
              image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
       },
       {
              title: 'tomato',
              price: 47,
              image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
       },
       {
              title: 'tea',
              price: 15,
              image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
       },
];
for (const product of products) {
       console.log(product)
       document.write(`<div class="product-card">
       <h3 class="product-title">${product.title}  Price: ${product.price} USD</h3>
       <img src="${product.image}" alt="" class="product-image">
       </div>`)
}

// є масив
// let users = [
//        {name: 'vasya', age: 31, status: false},
//        {name: 'petya', age: 30, status: true},
//        {name: 'kolya', age: 29, status: true},
//        {name: 'olya', age: 28, status: false},
//        {name: 'max', age: 30, status: true},
//        {name: 'anya', age: 31, status: false},
//        {name: 'oleg', age: 28, status: false},
//        {name: 'andrey', age: 29, status: true},
//        {name: 'masha', age: 30, status: true},
//        {name: 'olya', age: 31, status: false},
//        {name: 'max', age: 31, status: true}
// ];
let users = [
       {name: 'vasya', age: 31, status: false},
       {name: 'petya', age: 30, status: true},
       {name: 'kolya', age: 29, status: true},
       {name: 'olya', age: 28, status: false},
       {name: 'max', age: 30, status: true},
       {name: 'anya', age: 31, status: false},
       {name: 'oleg', age: 28, status: false},
       {name: 'andrey', age: 29, status: true},
       {name: 'masha', age: 30, status: true},
       {name: 'olya', age: 31, status: false},
       {name: 'max', age: 31, status: true}
];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
for (let i = 0; i < users.length; i++) {
       if (users[i].status === true){
              console.log(users[i]);
              document.write (`<p class="users-true">${users[i].name}  ${users[i].age}  ${users[i].status}</p>`)
       }
}
// - користувачів зі статусом false
for (let i = 0; i < users.length; i++) {
       if (users[i].status === false){
              console.log(users[i]);
              document.write (`<p class="users-false">${users[i].name}  ${users[i].age}  ${users[i].status}</p>`)
       }
}
// - користувачів які старші за 30 років
for (let i = 0; i < users.length; i++) {
       if (users[i].age >=30){
              console.log(users[i]);
              document.write (`<p class="users-age">${users[i].name}  ${users[i].age}  ${users[i].status}</p>`)
       }
}