// task 1
const isTrue = 'true';
const isFalse = false;
const num1 = 17;
const someVal=  undefined;
const isNull = null; 
console.log (('type of isTrue is ', typeof(isTrue)));
console.log (('type of isFalse is ', typeof(isFalse)));
console.log (('type of num1 is ', typeof(num1)));
console.log (('type of someVal is ', typeof(someVal)));
console.log (('type of isNull is ', typeof(isNull)));
//task 2
let height = 15
let width = 20
if (height < width) {
console.log(width)} 
else {
    console.log(height)
};
//task 3
for (let a = 0; a<=20; a++ ) {
    if (a % 3 == 0) {
        console.log (a);
    }
}
//task 4
let key = true
let documents = true
let pen = true
let apple = false
let orange = false

if ( key && documents && pen && apple || orange ) {
    console.log ('Могу идти') }
    else {
        console.log ('Не могу идти')
    }

//task5
// let number1 = prompt ('Type a number');
// if (number1 % 3 == 0 && number1 % 5 == 0 )
// {
//     alert ('FizBuz')
// }

// else if (number1 % 3 == 0) {
//     alert ('Buz')
// }
// else if (number1 % 5 == 0 )
// {
//     alert ('Fiz')
// }
// else {
//     alert ('')
// }

//task6
let age = prompt('Enter your age') 
if (age <16) {
    alert ('Пей колу')

}
else if ( age >=16  && age < 18)
{
    alert('Можешь выкурить сигаретку, только маме не говори')

}
else {
    alert ('Попей пивка')
}
//task 7
const side = prompt ('Type the direction')
switch (side) 
{
case 'юг':
alert('на юг пойдешь счастье найдешь')
break
case 'север':
    alert('на север пойдешь много денег найдешь')
    break
case 'запад':
    alert('на запад пойдешь верного друга найдешь')
    break
case 'восток':
    alert('на восток пойдешь разработчиком станешь')
    break
    default :
    alert('Try again')
}
//Task 8
let name = 'пОлИнА нАбЕрЕжНаЯ';
let lname = name.toLowerCase();

console.log (lname)