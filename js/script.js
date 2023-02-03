"use strict"; //дерректива, которая указывает про использование js в современном формате (указывается вначале файла)

//существует 8 типов данных
//числа (не больше чем 2 в 53 степени)
//строки
//boolean
//true/false
//null
//undefined
//symbol
//BigInt

// Спец. объекты
// [] Массивы
// function 
// Объект даты 
// Регулярные выражения 
// Ошибки 


// Практическое задание 
// Программа ответ на вопрос 

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?',''),
                b = prompt('На сколько оцените его?','');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count > 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы класический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyBD: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genres = prompt(`Ваш любимый жанр под номером ${i}`).toLocaleLowerCase;

            if (genres === '' || genres == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genres;
            }

            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });
        }
    }
};


// =========================== 

// ЛЕКЦИИ 
// =========================== 
// Циклы 
// =========================== 
let num=50;

while (num < 55) {
    console.log(num);
    num++;
}

// Проверка происходит после выполнения действий 
do {
    console.log(num);
    num++;
}
while (num < 55);

// Цикл с 3 итерациями (1-переменная, 2-условие, 3-действие) 
// i - сокращение от Итерация 
for (let i = 1; i < 10; i++) {
    if (i === 6) {
        //break; //останавливает цикл 
        continue; //пропускает ненужное значение
    }
    console.log(i);
}

// =========================== 
// Функции
// =========================== 
function calc(a, b) { // функция с объявленными аргументами
    return (a + b); // заканчивает действие функции
    // код после return является мертвым Unreachable и не выполняется
}

console.log(calc(3, 7)); // Function Declaration - создается до начала выполнения скрипта, можно вызвать перед объявлением  

// *Замыкание функции - это сама функция вместе со всеми внешними переменными, которые ей доступны.
let number = 70; // глобальная переменная, используется во всем коде

function ret() {
    let num = 50; // локальная переменная, используется только внутри функции

    //
    // действия функции
    //

    return num; // возвращает локальную переменную num во внешний мир, за пределы функции ret()
}

const anotherNum = ret();
console.log(anotherNum);


// Function Expression - сщздается только тогда, когда доходит поток кода, можно вызвать только после объявления
const logger = function() {
    console.log('Hello');
};

logger();

// Стрелочная функция (не имеет своего контекста this)
const calcF = (a, b) => {
    console.log('1');
    return a + b;
};

// =============================== 
// Методы и свойства строк и чисел
// ===============================
// Свойства не выполняют действия, а методы выполняют определенные действия и указываются с () наконце.
// str.length - определение количества символов в строке, количества значений в массиве (Свойство)
// str.toUpperCase() - переводит строку в верхний регистр (Метод)

const fruit = "Some fruit";
console.log(fruit.indexOf("q")); // метод - поиск подстроки. Выдаст значение -1 если заданного аргумента не окажется в строке (можно использовать как функцию наличия значений)

const logg = "Hello workd";
console.log(logg.slice(6,11)); // обрезает строку по заданным аргументам slice(начальный символ, конечный символ), если задать только первый аргумент, то отрежится строка до самого конца *поддерживаются отрицатеьлные значения

console.log(logg.substring(6,11)); // обрезает часть строки (первый аргумент может быть больше второго, не поддерживаются отрицательные значения)

console.log(logg.substr(6,11)); // аргументы (старт, длина обрезаемой строки)

// Методы над числовыми значениями
const tag = 12.2;
console.log(Math.round(tag));

const test = "12.2px";
console.log(parseInt(test)); // Метод преобразовует строку в числовое значение и округляет его до целого числа 12
console.log(parseFloat(test)); // Метод преобразовует строку в числовое значение c плавающей точкой 12.2

// =============================== 
// Callback функции
// ===============================
// Если функции вызываются одна за другой это не значит, что они отдадут свой результат в том же порядке (из-за задержки обработки функции, одна может выполниться быстрее другой)
// Callback - это функция, которая должна быть выполнена после того как другая функция завершила свое выполнение

function learnJS(lang, callback) {
    console.log(`Я учу ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done); //пишем функцию done без () потому что мы ее не вызываем, а передаем для дальнейшего использования

// =============================== 
// Объекты, деструктуризация объектов (ES6)
// ===============================
const options = { // Задаются свойства объекта
    name: 'test', // ключ: значение
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() { // Методы - это действия, которые могут совершать объекты 
        console.log('Test');
    }
};

options.makeTest(); //запускаем метод makeTest() в работу

const {border, bg} = options.colors; //деструктуризация объекта (вытаскиваем только нужные свойства в переменную для более удобного их использования)
console.log(border);

// console.log(options.name);

delete options.name; // удаление свойства из объекта

// console.log(options);

for (let key in options) { // в цикле мы перебираем все ключи key внутри объекта options
    if (typeof(options[key]) === 'object') { //проверяем если свойсво является объектом, то мы разбираем его значения (объект в объекте) 
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`); // выводим название ключей и их значения
    }
}

console.log(Object.keys(options).length); //Object.keys() - разбирает свойства объекта на массив, а length - подсчитывает их количество


// =============================== 
// Массивы и псевдомассивы
// =============================== 
// Массивы- это структура, которая содержит элементы по порядку 
const arr = [1, 2, 3, 6, 8];
console.log(arr.length); //length показывает значение последнего индекса элемента +1, так как счет начинается с 0, то получаем индекс 4+1=5 элементов
arr[99] = 0; // добавили к индексу 99 значение 0, теперь в массиве 100 элементов и 94 пустых значений (это неправильное поведение и так делать нельзя)

arr.pop(); //Метод, который удаляет последний элемент массива
arr.push(10); //Метод, который добавляет заданный элемент вконце массива

for (let i = 0; i < arr.length; i++) { //перебираем все элементы массива и выводим их 
    console.log(arr[i]);
}

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} значение внутри массива ${arr}`);
});
//Разница между for и forEach в том, что в for можно задать break  и continue (остановить или пропустить значение), в forEach этого нет

const str = prompt("", "");
const products = str.split(", "); // метод split превращает строку в массив, с заданным разделителем.
products.sort(); //сравнение строковых элементов
console.log(products.join("; ")); //метод join превращает массив в строку, перечислив элементы массива через указанный разделитель

const numString = [2, 13, 26, 8, 10];
numString.sort(compareNum); //сортируем числовые элементы массива по порядку по заданной функции compareNum()
console.log(numString);

function compareNum(a,b) { //функция для сортировки чисел в массиве по порядку
    return a - b;
}
// Псевдомассивы не содержат методы


// =============================== 
// Передача по ссылке или по значению, Spread оператор (ES6-ES9)
// =============================== 
const obj = {
    a: 5,
    b: 1
};

const copy = obj; // Передаем ссылку на объект obj

copy.a = 10; // модифицируя копию объекта мы меняем и его исходные значения

console.log(copy);

// 1-ый способ *Создаем копию объекта через функцию
function copyObj(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copyObj(numbers); // Клонируем объект numbers

// Проверяем скопироваля ли объкт 
newNumbers.a = 10; // модифицируем у копии значение "a"

console.log(newNumbers);
console.log(numbers); // После проверки мы видим, что создали поверхностную копию объекта, в которой меняются только базовые свойства, а у вложенных объектов свойства переписываюся (*существуют и глубинные копии объектов)

// 2-ой способ Object.assign()

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); // первый аргумент - это объект куда мы хотим поместить другой объект, второй аргумент - объект, который мы помещаем

const clone = Object.assign({}, add); // создаем копию объекта через метод Object.assign() путем добавления другого объекта

// 3-ий способ === Копирование массивов ===
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); //копируем Массив

newArray[1] = 'adfadfadfad'; // меняем у копии значение второго элемента

// 4-ый способ копирования массивов *Spread оператор (ES6-ES9)
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejornal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook']; // используем оператор Spread "..." для разворачивания массива на элементы и добавляем новые

// Практический пример использования оператора Spread
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const numPer = [2, 5, 7];

log(...numPer); // передаем значения массива numPer в массив log

// 5-ый способ копирования объектов с помощью Spread оператора
const array = ['a', 'b'];

const newAarray = [...array]; // копирование массива

const q = {
    one: 1,
    two: 2
};

const newObj = {...q}; // копирование объекта


// =============================== 
// ============ ООП ==============
// =============================== 

//При использовании какого-нибудь метода на строке, мы получаем из строки объект
 
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const jonh = {
    health: 100
};

const jonh2 = Object.create(soldier); // прототипное наследие объекта soldier

jonh._proto_ = soldier; // (Устаревший метод) задали через прототип _proto_ элементу jonh все свойства soldier

Object.setPrototypeOf(jonh, soldier); // современный метод наследования прототипа


// ====================================== 
// Динамическая типизация в JS 
// ======================================
// Динамическая типизация - это возможность одного типа данных превращаться в другой 

// To string 
// 1) Команда String
console.log(typeof(String(null))); // устаревший метод

// 2) Конкатенация - сложение строк или сложение чего-то со строкой
console.log(typeof(5 + "")); // при сложение чего-то со строкой получается строка

const url = 5;

console.log("https://facebook.com/catalog/" + url);

const fontSize = 26 + 'px';

// To Number
// 1) 
console.log(typeof(Number('4'))); //устаревший метод

//2) Унарный +
console.log(typeof(+"5"));

//3)
console.log(typeof(parseInt("15",10)));

let answ = +prompt("Hello","");

// *Все что приходит от пользователя, приходит с типом данных Строка

//To boolean

// 0, '', null, undefined, NaN; все это превращается в false, все остальное вернет true
//1)
let switcher = null;

if (switcher) {
    console.log('Working...'); //команда не выполниться, так как условие switcher вернет false
}

switcher = 1; //записываем в переменную число

if (switcher) { //switcher со значением 1 вернет true и команда выполнится
    console.log('Working...');
}

// 2) 
console.log(typeof(Boolean('4'))); //устаревший способ

//3)
console.log(typeof(!!"4444444")); // !! превращает строку в boolean значение

// ==========================================
//  Задачи с собеседований на понимание основ 
// ==========================================

// Какое будет выведено значение: 
let x = 5; alert( x++ ); // Так как у нас постфиксная запись Декримента(++) то сначало нам вернется исходное значение 5

// Чему равно такое выражение: 
// [ ] + false - null + true //* [] - пустой массив приравнивается к строчному типу данных "", дальше мы отнимаем от строки null и получаем значение NaN(not a number) и плюсуем true и в конечном счете получаем NaN 
console.log([ ] + false - null + true); //NaN

// Что выведет этот код: 
let y = 1; 
let x = y = 2; 
alert(x); //получаем 2, перезаписываем х на 2

// Чему равна сумма 
// [ ] + 1 + 2
console.log([ ] + 1 + 2); // "12" - строка

// Что выведет этот код: 
alert( "1"[0] ); //через значение [0] мы обращаемся к индексу первого элемента строки "1" и получаем в итоге 1

// Чему равно 
console.log(2 && 1 && null && 0 && undefined); //оператор && запинается на ложном значении и вернет значение null
// ИЛИ (||) запинается на правде

// Есть ли разница между выражениями? 
// !!( a && b ) и (a && b) //Не равны, так как !! превращает значение в тип boolean

// Что выведет этот код: 
alert( null || 2 && 3 || 4 ); // у оператора && выше индекс и оно выполниться первым, 2 не равно 3 - это ложь, вернется 3, сравниваем null и 3 - так как || запинается на правде, а null это неправда, получаем 3, при сравнении 3 || 4 - получаем 3

console.log(3 && 4); // вернет 4, так как 3 не равно 4 - это неправда и нам вернет 4

// Правда ли что a == b 
// a = [1, 2, 3]; 
// b = [1, 2, 3];
// *Не равны, так как это два разных массива, просто с одинаковыми значениями

// Что выведет этот код:  
alert( +"Infinity" ); //выведет Infinity, но с типом данных Число, так как префиксный инкремент + превращает значение в Число

// Верно ли сравнение: "Ёжик" > "яблоко"
// Не равно , строки сравниваются посимвольно по юникоду букв / *можно посмотреть в специальной таблице

// Чему равно 
// 0 || "" || 2 || undefined || true || falsе
// Код будет выполняться до тех пор пока не наткнется на true-правду, то есть на 2


// ==========================================
//  Получение элементов со страницы 
// ==========================================
const box = document.getElementById('box'); //получение элемента по id

const btns = document.getElementsByTagName('button'); //получение всех элементов по тегу , на выходе мы получаем псевдомассив с перебором всех элементов со страницы (обратиться к определенному элементу можно по индексу массива [1] - *первый элемент)

const circles = document.getElementsByClassName('circle'); //получение всех элементов по class, также получаем HTML Collection (псевдомассив)

//Новые методы для получения элементов
const hearts = document.querySelectorAll('.heart'); //получаем элемент по заданным селекторам, например (div > p.red)
// Метод querySelectorAll имеет метод forEach для перебора элементов
hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart'); //получаем только один-первый элемент со страницы, который первый попадет под заданный параметр


// ==========================================
//  Действия с элементами на странице
// ==========================================
// Переменные берем из предыдущего урока

box.style.backgroundColor = 'blue'; //меняем background
box.style.width = '500px'; //меняем ширину

btns[1].style.borderRadius = "100%"; //обращаемся к первой кнопке из массива кнопок на странице и меняем ей бордер радиус
circles.style.backgroundColor = 'red'; //будет ошибка если попытаться поменять стили у псевдомассива, нужно обращаться к определенному элементу из массива

box.style.cssText = `background-color: blue; width: ${num}`; //задаем инлайн стили ко всем элементам массива, возможно всавлять переменные

for (let i = 0; i < hearts.length; i++) { //задаем стили всем элементам псевдомассива hearts через перебор for
    hearts[i].style.backgroundColor = 'blue';
}

hearts.forEach(item => { //задаем стили всем элементам псевдомассива hearts через перебор forEach
     item.style.backgroundColor = 'blue';
});

const div = document.createElement('div'); //создаем элемент div, но только в js скрипте, на старнице сайта он не появится
const text = document.createTextNode('Hello'); //создаем текст

div.classList.add('black'); //работа со списком классов, можем добавлять, удалять, переключать классы

document.body.append(div); //добавляем в DOM на старнице (.append) элемент div вконце body
document.querySelector('.wrapper').append(div); //добавляем в DOM на старнице элемент div в блок с классом wrapper

const wrapper = document.querySelector('.wrapper');

wrapper.prepend(div); // вставка элемента вначале блока (.prepend)

hearts[0].before(div); //вставляем элемент перед указанным блоком
hearts[0].after(div); //вставляем элемент после указанного блока

circles[0].remove(); //удаляем указанный элемент

hearts[0].replaceWith(circles[0]); //заменяем один элемент на другой

div.innerHTML = "<h3>Hello World</h3>"; //помещаем HTML структуру в указанный элемент
div.textContent = "Hello"; //можно вставить только текст

div.insertAdjacentHTML('afterbegin','<h2>Hello</h2>'); //метод вставки HTML конструкции с двумя аргументами. (позиция вставки относительно заданного блока, HTML конструкция)

// ==========================================
//  События и их обработчики
// ==========================================
const btn = document.querySelector("button"),
      btnsMore = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

btn.onclick = function() { //устаревший вариант
    alert('Click');
};

// Этот способ используется на реальных проектах 
btn.addEventListener('click', () => { //действие по клику на элементу
    alert('Click text');
});

let i = 0;
const deleteElement = (e) => { //действие по наведению курсора на элемент, Требует всегда указывать аргумент-событие event или сокращенно e. Дальше через запятую передаем другие аргументы если нужны
    e.target.remove(); //получаем наш элемент и удаляем его
    i++;
    if (i == 1) {
        btn.btn.removeEventListener('click', deleteElement); //удаляем событие клик по второму нажатию на кнопку
    }
};

btn.addEventListener('click', deleteElement); //добавляем событие клик

// Всплытие событий - когда собитие назначается на нечколько элементов вложенных друг в друга, сначало срабатиывает событие на вложенном элементе, а потом на родительском и поднимается по иерхахии дерева DOM вверх 

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault(); //отменяем стандартное поведение элемента в браузере (*всегда указываем вначале функции)

    console.log(event.target);
});

// Применяем оно событие к нескольким элементам псевдомассива 
btnsMore.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true}); //третий аргумент в собитиях это опции, опция {once} вызывает событие только один раз и потом удаляет его.
});


// ================================================================
// Навигация по DOM - элементам, data-атрибуты, преимущество for/of 
// ================================================================
console.log(document.head); //обращаемся к ветке DOM head (можем добавлять meta теги, подключать скрипты и стили, шрифты), также можем обратиться и к body
console.log(document.documentElement); //обращаемся к самому верхнему элементу DOM - HTML

console.log(document.body.childNodes); //получаем всех Узлов родителя body

// Node - Нода - узел 
console.log(document.body.firstChild); //получаем первый элемент
console.log(document.body.lastChild); //получаем последний элемент

console.log(document.querySelector('#current').parentNode.parentNode); //путешествуем по дереву DOM, можно обращаться к родителям и соседям определенный элементов
// parentNode - родительский Узел
// parentElement - родительсткий элемент

// Дата атрибуты 
console.log(document.querySelector('[data-current="3"]').nextSibling); //получаем следующего соседа. Узел
console.log(document.querySelector('[data-current="3"]').nextElementSibling); // следующий элемент

for(let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue; //пропускаем элемент с именем узла #text
    }

    console.log(node);
}


// ================================
// События на мобильных устройствах
// ================================
//touchstart - при возникновении косания
//touchmove - при смещении пальца
//touchend - как только палец оторвался от экрана
//touchenter - при наскальзывании на элемент с этим собитием
//touchleave - палец ушел за пределы назначенного элемента
//touchcancel - при выходе пальца за пределы браузера

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => { //Callback функция
        e.preventDefault();

        console.log('Start'); //Косание экрана
        console.log(e.touches);
    });

    box.addEventListener('touchmove', (e) => { //Callback функция
        e.preventDefault();

        console.log('Move'); //Движение по экрану
    });

    box.addEventListener('touchende', (e) => { //Callback функция
        e.preventDefault();

        console.log('End'); //Отрываем палец от экрана
    });
});

// touches - показывает количество пальцев, которые касаются экрана
// targetTouches - количество пальцев, которые взаимодействуют именно с этим объектов
// chengedTouches - количество пальцев, которые учавствуют в текущем событии
