/*
    ДЗ.
    Задача1. Написать функцию, которая аргументами получается два числа и возвращает большее из них.
*/


function bigger (a, b) {
    if (a > b)
   return (a)
   else if (b > a )
    return (b)
}
console.log(bigger(50, 45))



   /* Задача2. Написать функцию, которая принимает аргументом число(больше 0)
    и возвращает массив чисел от 0 до этого числа
*/

function arr (a) {
    let array = [];
    for (let i = a; i > 0; i++){
        array.push(i);
    } return array;
};

//После введение данной функции перестает полностью работать страница, как по другому решить не знаю