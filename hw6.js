// //Дан массив:
// // const colors = ['red', 'green', 'blue']
// // Выведите в консоль его длину.

// const colors = ['red', 'green', 'blue']
// console.log(colors.length)

// //Task 2 🖥
// // Дан массив:
// // const animals = ['monkey', 'dog', 'cat']
// // Выведите в консоль его последний элемент вне зависимости от его длинны.

// const animals = ['monkey', 'dog', 'cat']
// console.log(animals.pop())

// //Task 3 🖥
// // Дан массив:
// // const numbers = [5, 43, 63, 23, 90]
// // Удалите все элементы в массиве и выведите в консоль полученный результат.
// // Реализуйте решение двумя способами.

// const numbers = [5, 43, 63, 23, 90]
// numbers.splice(0)
// console.log(numbers)

// // Task 4 🖥
// // Дан массив:
// //     const students = ['Polina', 'Dasha', 'Masha']
// // Удалите последний элемент массива, затем вместо него добавьте в массив студента Borya.
// // Удалите первый элемент массива, затем вместо него добавьте в массив студента Andrey.
// // Полученный результат не забудьте вывести в консоль.

// const students = ['Polina', 'Dasha', 'Masha']
// students.splice(0,1,'Andrey')
// console.log(students)
// students.splice(-1,1,'Borya')
// console.log(students)

// //Task 5 🖥
// // Дан массив:
// // const cats = ['Gachito', 'Tom', 'Batman']
// // Выведите в консоль все элементы массива. Сначала через цикл for, затем for of.

const cats = ['Gachito', 'Tom', 'Batman']
for (i=0; i<cats.length; i++) {
console.log(`element ${i}: ${cats[i]}`)
}
for (i of cats) {
    console.log(`element: ${i}`)
}

// // Task 6 🖥
// //     const evenNumbers = [2, 4, 6, 8, 10]
// //     const oddNumbers = [1, 3, 5, 7, 9]
// // Соедините два массива чисел в один.
// // В полученном массиве попробуйте найти индекс числа 8

const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]
const newArray = evenNumbers.concat(oddNumbers)
console.log(newArray)
console.log(newArray.indexOf(8))

// //Task 7 🖥
// // Дан массив:
// // const binary = [0, 0, 0, 0]
// // Наш бинарный массив неполный, в нем явно не хватает единиц.
// // Превратите данный массив в строку.
// // [0, 0, 0, 0] -> '0101010'

const binary = [0, 0, 0, 0]
const newBinary= binary.join('1')
console.log(newBinary)

// //Task 1 👨‍🏫
// Реализуйте функцию которая будет проверять, является ли слово палиндромом.

let words = ['казак', 'машина', 'поле', 'топот', 'потоп', ]
let word=0
let newWord =0


for (i=0;i<=words.length-1;i++) {
 word=words[i]

newWord =words[i].split('').reverse().join('')
if (newWord===word){
    console.log(word)
}
}

//Task 2 👨‍🏫
// const matrix = [
//     [12, 98, 78, 65, 23],
//     [54, 76, 98, 43, 65],
//     [13, 324, 65, 312],
//     [9092, 22, 45, 90000],
// ]
// Выведите в консоль среднее значение чисел в многомерном массиве.

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]

const newMatrix = matrix.join(',').split(',')
console.log(newMatrix)
let sum=0

for (i=0;i<=newMatrix.length-1; i++) {
newNumber = +newMatrix[i]
count=i+1
sum+=newNumber
console.log(sum)
}
const middle= sum/count
console.log(middle)

//Task 3 👨‍🏫
// Дан массив:
// const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
// Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. Оба массива затем выведите в консоль.

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]

const minus= mixedNumbers.filter((el) => el<0)
const plus =mixedNumbers.filter((el) => el>=0)

console.log(minus, plus)

//Task 4 👨‍🏫
// Создать массив длинной не менее 5, из динамически созданных случайных чисел. Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб и записывает в новый массив. В конце вывести оба массива в консоль.

const randomArray= []


for(i=0;i<=9;i++) {
randomArray.push(Math.floor(Math.random()*100))

}
const newRandom= randomArray.map((el)=> el**3)
console.log(randomArray,newRandom)
