
//1)Написать функцию поиска в строке указанной подстроки и замены ее на новую.
// Строку, ее подстроку для замены и новую подстроку вводит пользователь.

let String = prompt("Enter your string");
let Subsrting = prompt("Enter the value of the substring you want to replace");
let NewSubstring = prompt("Enter enter new value");

console.log(String); // что изначально ввели
console.log(Subsrting); // что из изначально введенного хотим заменить
console.log(NewSubstring); // на что именно хотим заменить

let str = replaceStr(String, Subsrting, NewSubstring);// меняет то, что изначально ввели на то, что хотим вставить

function replaceStr(String, Subsrting, NewSubstring){
    let str = String.split(Subsrting).join(NewSubstring);
    return NewSubstring;
}
console.log(str);

// ПОЧЕМУ ЗАМЕНЯЕТ ВСЮ СТРОКУ ОДНИМ ЧИСЛОМ?

//2)Вводится строка, содержащая буквы, целые неотрицательные числа и иные символы.
// Написать функцию, которая реализует следующий функционал: требуется все числа, которые встречаются в строке,
// поместить в отдельный целочисленный массив. Например, если дана строка "дом 48, корпус 9, парадная 7, этаж 4",
// то в массиве должны оказаться числа 48, 9, 7 и 4

let adress = prompt('дом 48, корпус 9, парадная 7, этаж 4');
console.log(adress); // показать введеный адрес

/*let RegExp = /\d+/g;
let numers = parseInt(adress.replace(RegExp,""));
    console.log(numers[0]);*/



//3)Допустим, пользователь вводит названия городов через пробел. Вы их присваиваете переменной.
// Переставьте названия так, чтобы они были упорядочены по алфавиту.

let city = ['Чита', 'Москва', 'Тюмень', 'Казань', 'Астрахань', 'Иркутск', 'Краснодар', 'Самара']; //т.к. города это отдельные строчные значения массива, то они должны быть в ''
city.sort(); // сортирует по алфавиту
console.log(city); // выводит результат сортировки массива
