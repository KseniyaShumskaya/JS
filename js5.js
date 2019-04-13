(function () {
    'use strict';

let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

/*1)Написать функцию со следующими аргументами: объект, from (значение от), to (значение до).
Функция должна вернуть объект с товарами, цены которых лежат в диапазоне от значения from до значения to.
    Пример вызова функции getGoods(goods, 2000, 3000); в данном случае функция должна вернуть все товары,
    у которых цена в диапазоне от 2000 до 3000. Для проверки функции используйте объект goods из файла с урока.*/

function getGoods(goods, from, to) {
        let getGoods = {};
        let a = prompt('ввести минимальную стоимость');
        let b = prompt('ввести максимальную стоимость');

        for(let key in goods) // допустим ключ есть в объекте
        {
            if(goods[key]['price'] >= a && goods[key]['price'] <= b) // если стоимость больше или равна а и стоимость меньше или равна в
            {
                getGoods = goods[key];
            }
        }
        return getGoods;
    }
    console.log(getGoods(goods, 2000, 3400));





/*2)Написать функцию addToCart(obj, title, countToCart) {} , где obj - объект, title - название товара,
count - количество товара, которое нужно добавить в корзину. Функция ищет товар с указанным названием, если количество позволяет,
    то уменьшает количество товара на countToCart, если не позволяет, то выводит информацию об этом в консоль и завершает работу.
    Для проверки функции используйте объект goods из файла с урока.*/



/*3)Напишите функцию, которая отсортирует массив объектов books по значению свойства title. Объект в файле с занятия.*/

    let books = [
        { author: 'Толстой', title: 'Война и мир'},
        { author: 'Гончаров', title: 'Обломов'},
        { author: 'Лермонтов', title: 'Герой Нашего Времени'}
    ];


  /* function sortBooks(arr) {
            if (title[0] > title[0 + i) {
                return 1;
            }
            if (title[0] < title[0+i]) {
                return -1;
            }
        });

        return arr;
        console.log(arr);*/

/*4)Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.).
Выведите на экран текущий день недели.*/

let week = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 7,
};

    function weekDay(week){ //из объекта неделя берем день недели
        for (let key in week){ // допустим у объекта есть ключ
            console.log(week.key); // вывести ключи объекта
            if(key === getWeekDay()){ //если ключ 100% сегодняшнему дню
                console.log('Сегодня: '+ key+' '+weekDay[key]+' день недели!');
            }
        }
    }
    weekDay(week);

    console.log(getWeekDay());


}());