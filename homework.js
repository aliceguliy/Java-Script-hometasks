var fruits = ['Apple', 'Watermellon']; //начальный массив
fruits.push('Strawberry'); //добавили в конец клубнику
fruits.shift(); //удалили 1й эл-т с изменением длины массива
fruits[fruits.length-2] = 'Melon'; //заменили предпоследний эл-т массива
fruits.unshift('Banana','Cherry'); //добавили в начало два эл-та

// массив приобрел следующий вид: ['Banana', 'Cherry', 'Melon', 'Strawberry'];
// меняем регистр букв разными методами
// 1. при помощи while
var i = 0;
while (i < fruits.length){
    fruits[i] = fruits[i].toLocaleUpperCase();
    i+=2;
}

//2. при помощи for короткой записью
for (var i = 0; i < fruits.length; i++){
    fruits[i] = i % 2 === 0 ? fruits[i].toLocaleUpperCase() : fruits[i];
}
 
for (var i = 0; i < fruits.length; i++) {  // замениили все буквы на строчные в каждом эл-те
    fruits[i] = fruits[i].toLowerCase();
}

// сортировка и группировка массивов
// исходим из того, что нам известны значения ягод, которые есть в массиве

var berries = []; // создали два новых  пустых массива
var other = [];

for (var i = 0; i < fruits.length; i++) {             // при помощи for  перебираем массив
    if (fruits[i] === "cherry" || fruits[i] === "strawberry") {    // при помощи if указываем, в какой массив нужно передать ягоды
        berries.push(fruits[i]);
    }
    else {
        other.push(fruits[i]);      // при помощи else  указываем, в какой массив определить все остальное
    }
}


// счетчик

var counter = function() { //LE
	var result = 0;
	return function(a) {
		result += a;
		return result;
	}
};
var count = counter();


// sum(1)(2)(3) и т.д.

function sum(kotopyos) {    //1 
    var result = kotopyos; 
    function f(b) { // 2
        result += b; // 3 + 1 = 4  
        return f;
    }
    f.toString = function() {
        return result;
    }
    return f;
};