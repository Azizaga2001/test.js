//1)
//что выведет в консоли console.log(Boolean(10 > 9))

console.log("1)", "true")

//true

//2)
//что выведет в консоли console.log(Boolean(10 < 9))

console.log("2)", "false")

//false

//3)
//что выведет в консоли скрипт ниже
if (1 == 2) {
    console.log("3)", true);
} else {
    console.log("3)", false);
}
//false

//4)
//что выведет в консоли скрипт ниже
if (1 < 2) {
    console.log("4)", true);
} else {
    console.log("4)", false);
}
//true

//5)
//что выведет в консоли скрипт ниже
if (1 > 2) {
    console.log("5)", true);
} else {
    console.log("5)", false);
}
//false

//6)
//что выведет в консоли скрипт ниже
let x = 0;
console.log("6)", Boolean(x));
//false

//7)
//что выведет в консоли скрипт ниже
let x1 = -0;
console.log("7)", Boolean(x1));
//false

//8)
//что выведет в консоли скрипт ниже
let x2 = "";
console.log("8)", Boolean(x2));
//false

//9)
//что выведет в консоли скрипт ниже
let x3;
console.log("9)", Boolean(x3));
//false

//10)
//что выведет в консоли скрипт ниже
let x4 = null;
console.log("10)", Boolean(x4));
//false

//11)
//что выведет в консоли скрипт ниже
let x5 = false;
console.log("11)", Boolean(x5));
//false

//12)
//что выведет в консоли скрипт ниже
let x6 = 10 / "H";
console.log("12)", Boolean(x6));
//false

//13)
//перечислите логические операторы
console.log("13)", "Оператор отрицания — !", "Оператор И — &&", "Оператор ИЛИ — ||")

//14)
//что выведет в консоли скрипт ниже
if (1 > 2 && 2 < 3 || "hello".length < 4) {
    console.log("14)", true);
} else {
    console.log("14)", false);
}
//false

//15)
//что выведет в консоли скрипт ниже
if (1 > 2 && 2 < 3 || "hello".length < 4) {
    console.log("15)", true);
} else {
    console.log("15)", false);
}
//false

//16)
//что выведет в консоли скрипт ниже
if (1 > 2 || 2 < 3 || "hello".length != 4) {
    console.log("4)", true);
} else {
    console.log("4)", false);
}
//true

//17)
//создайте структуру ниже с помощью if, else, else if
let money = 10;

if (money >= 5) {
    console.log("5)", "Я куплю пирог")
} else if (money >1 && money < 5 ) {
    console.log("5)", "Мало денег")
} else {
    console.log("5)", "Денег нет")
}
/*
 если money больше или равно 5-ти, то вывести в консоли 'Я куплю пирог',
 иначе если money меньше 5-ти и больше 1, то вывести в консоли 'Мало денег',
 иначе вывести в консоли 'Денег нет'
*/

//18)
//превратите скрипт ниже в switch
let day = new Date().getDay();

switch (day == 1) {
    case 1:
        console.log("18)", 'Monday');
        break
    case 2:
        console.log("18)", 'Tuesday');
        break
    case 3:
        console.log("18)", 'Wednesday');
        break
    case 4:
        console.log("18)", 'Thursday');
        break
    case 5:
        console.log("18)", 'Friday');
        break
    default:
        console.log("18)", 'Break Time!');
}


//19)
let num = '654765fdfds';
if (/\s/g.test(num) || /[a-zA-Z]/g.test(num)) {
    console.log("19)", false)
}