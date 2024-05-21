// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = []
users.push(new User(1, 'John', 'Doe', 'john.doe@example.com', '+12345678901'));
users.push(new User(2, 'Jane', 'Smith', 'jane.smith@example.com', '+12345678902'));
users.push(new User(3, 'Michael', 'Johnson', 'michael.johnson@example.com', '+12345678903'));
users.push(new User(4, 'Emily', 'Davis', 'emily.davis@example.com', '+12345678904'));
users.push(new User(5, 'William', 'Brown', 'william.brown@example.com', '+12345678905'));
users.push(new User(6, 'Jessica', 'Jones', 'jessica.jones@example.com', '+12345678906'));
users.push(new User(7, 'Daniel', 'Garcia', 'daniel.garcia@example.com', '+12345678907'));
users.push(new User(8, 'Laura', 'Martinez', 'laura.martinez@example.com', '+12345678908'));
users.push(new User(9, 'Robert', 'Rodriguez', 'robert.rodriguez@example.com', '+12345678909'));
users.push(new User(10, 'Sophia', 'Hernandez', 'sophia.hernandez@example.com', '+12345678910'));

console.log(users)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let evenUsers = users.filter(user => user.id % 2 === 0)
console.log(evenUsers)

//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let usersSort = users.sort((id1,id2)=> id1.id -id2.id)
console.log(usersSort)
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname , email, phone, order) {

        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let clients= []
clients.push(new Client(1, 'Olivia', 'Wilson', 'olivia.wilson@example.com', '+12345678911', ['item1', 'item2']));
clients.push(new Client(2, 'Lucas', 'Anderson', 'lucas.anderson@example.com', '+12345678912', ['item3']));
clients.push(new Client(3, 'Emma', 'Thomas', 'emma.thomas@example.com', '+12345678913', ['item4', 'item5','item6']));
clients.push(new Client(4, 'James', 'Taylor', 'james.taylor@example.com', '+12345678914', ['item7']));
clients.push(new Client(5, 'Ava', 'Moore', 'ava.moore@example.com', '+12345678915', ['item8', 'item9','item10','item11']));
clients.push(new Client(6, 'Liam', 'Jackson', 'liam.jackson@example.com', '+12345678916', ['item12','item13']));
clients.push(new Client(7, 'Isabella', 'White', 'isabella.white@example.com', '+12345678917', ['item14']));
clients.push(new Client(8, 'Mason', 'Harris', 'mason.harris@example.com', '+12345678918', ['item15', 'item16']));
clients.push(new Client(9, 'Sophia', 'Martin', 'sophia.martin@example.com', '+12345678919', ['item17']));
clients.push(new Client(10, 'Ethan', 'Thompson', 'ethan.thompson@example.com', '+12345678920', ['item18', 'item19']));
console.log(clients)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
 let sortClient = clients.sort((client1,client2)=>client1.order.length-client2.order.length)
console.log(sortClient)
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model,producer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
}
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
Car.prototype.drive = function (){
    console.log(`їдемо зі швидкістю ${this.maxSpeed}км на годину`)}
let adddrive = new Car("Camry", "Toyota", 2021, 205, 2.5)
adddrive.drive()

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
console.log('------info------')

Car.prototype.info = function() {
    for (let key in this) {
        if (typeof this[key] !== 'function')
            console.log(key,this[key]);
    }
}
let myCar = new Car('Civic', 'Honda', 2022, 180, 1.5);
myCar.info()

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
console.log('------------------')
Car.prototype.increaseMaxSpeed = function (newSpeed) {
    console.log(this.maxSpeed += newSpeed);
}
let speed = new Car("Corolla", "Toyota", 2019, 190, 1.6)
speed.increaseMaxSpeed(20)

// -- changeYear (newValue) - змінює рік випуску на значення newValue
Car.prototype.changeYear = function (newValue) {
    this.year = newValue
    console.log(this)

}
let year =  new Car("Accord", "Honda", 2018, 210, 2.0)
year.changeYear(2022)
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
Car.prototype.addDriver = function(driver) {
    this.driver = driver;
};
let newCar = new Car("Focus", "Ford", 2018, 180, 1.0)
let driverInfo = {
    name: 'John Doe',
    age: 30,
    licenseNumber: 'ABC123456'}
newCar.addDriver(driverInfo)
console.log(newCar)

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2 {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`);
    }

    info() {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key} - ${this[key]}`);
            }

        }
    }
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }
    addDriver(driver) {
        this.driver = driver;
    }
}
let myCar2 =  new Car("Elantra", "Hyundai", 2019, 185, 1.8)
myCar2.drive(); // Виведе: Їдемо зі швидкістю 180 км/год
myCar2.increaseMaxSpeed(50);
myCar2.changeYear(2024);
myCar2.addDriver({ name: 'John Doe', age: 30, licenseNumber: 'ABC123456' });
console.log('---------new Car---------')
console.log(myCar2)
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
    let cinderellas  = [
        new Cinderella('Anna', 19, 36),
        new Cinderella('Bella', 21, 37),
        new Cinderella('Clara', 22, 38),
        new Cinderella('Diana', 20, 35),
        new Cinderella('Ella', 23, 39),
        new Cinderella('Fiona', 18, 34),
        new Cinderella('Gina', 24, 33),
        new Cinderella('Hana', 19, 32),
        new Cinderella('Ivy', 22, 40),
        new Cinderella('Julia', 20, 41)
    ];
console.log(cinderellas)

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}
let myPrince = new Prince('Charming', 30, 36);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let pAndC =  null
for (const cinderella of cinderellas) {
    if (cinderella.footSize === myPrince.foundShoe ){
        pAndC = cinderella
    }
}
console.log(pAndC)
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let myPrince2 = new Prince('Adam', 32, 34);
let foundCinderella = cinderellas.find (cinderella => cinderella.footSize === myPrince2.foundShoe)
console.log(foundCinderella)

//
//
//
// Через Array.prototype. створити власний foreach, filter, map
Array.prototype.myForEach = function (callback){
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}
let numbers =  [1,2,3,4,5,6]
numbers.myForEach(function(element) {
    console.log(element * 2)})

Array.prototype.myFilter = function (callback){
    let result = []
    for (let i = 0; i < this.length; i++) {
       if (callback(this[i], i, this)) {
        result.push(this[i]);}
    }
    return result
}
let arr = [10,15,18,3,-4,27]
console.log(arr.myFilter(number => number % 2 === 0));

Array.prototype.myMap = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};
let text = ['apple', 'banana', 'orange', 'grape', 'pineapple'];
console.log(text.myMap(function (upper) {
    return upper.toUpperCase()
}));