/**
 * Все используемые данные в javascript имеют определенный тип. В JavaScript имеется восемь типов данных:
 * String: представляет строку
 * Number: представляет числовое значение
 * BigInt: предназначен для представления очень больших целых чисел
 * Boolean: представляет логическое значение true или false
 * Undefined: представляет одно специальное значение - undefined и указывает, что значение не установлено
 * Null: представляет одно специальное значение - null и указывает на отсутствие значения
 * Symbol: представляет уникальное значение, которое часто применяется для обращения к свойствам сложных объектов
 * Object: представляет комплексный объект
 */

//NUMBER
let x = 45;
let y = 23.897;


//BIGINT
let dimension = 19007n;
const value = 2545n;
//Example
let num = 9007199254740991n
console.log(num);       // 9007199254740991n
console.log(num + 1n);  // 9007199254740992n
console.log(num + 2n);  // 9007199254740993n
console.log(num + 3n);  // 9007199254740994n

//BOOLEAN
let isAlive = true;
let isDead = false;


//STRING 

let user = "Tom";
let company = 'Microsoft';
let language = `JavaScript`;
console.log(user);
console.log(company);
console.log(language)

let newCompany = "Бюро \"Рога и копыта\""; //екранизация 

//Использование косых кавычек позволяет нам применять такой прием как интерполяция - встраивать данные в строку. Например:
let userT = "Tom";
let text = `Name: ${userT}`;
console.log(text);  // Name: Tom 

let userF = "Tom";
let age = 37;
let isMarried = false;
let textV = `Name: ${userF}   Age: ${age}   IsMarried: ${isMarried}`;
console.log(textV);  // Name: Tom   Age: 37   IsMarried: false


// UNDEFINED and Null
let isAliveNEw;
let isDeadNew = null;
console.log(isAliveNEw);
console.log(isDeadNew);

// Слабая типизация
let a = 45;  // тип number
let b = a + 5;
console.log(b); // 50
     
a = "45"; // тип string
let c = a + 5
console.log(c); // 455

// typeof

let id;
console.log(typeof id);       // undefined
 
id = 45;
console.log(typeof id);   // number
 
id = 45n;
console.log(typeof id);     // bigint
 
id = "45";
console.log(typeof id);     // string

console.log(typeof isDeadNew); // object