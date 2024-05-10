//Task 1 💻
//Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта.

const obj = {
  name: "Vika",
  age: 24,
};
console.log(obj);
delete obj.name;
console.log(obj);

//Task 2 🖥
//Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль true

const person = {
  name: "Vika",
  age: 24,
};
if (person.number) {
  console.log(true);
} else {
  console.log(false);
}

//Task 3 🖥
//Дан обьект:
//     const student = {
//         name: 'John',
//         age: 19,
//         isHappy: true
//     }
// C помощью цикла for in вывести в консоль сначала все ключи, потом значения ключей обьекта.

const student = {
  name: "John",
  age: 19,
  isHappy: true,
};
for (const property in student) {
  console.log(`${property}: ${student[property]}`);
}

// Task 4 🖥
// Дан обьект:
// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };
// Вывести в консоль слово красный и синий

const colors = {
  "ru pum pu ru rum": {
    red: "красный",
    green: "зеленый",
    blue: "синий",
  },
};
console.log(
  `${colors["ru pum pu ru rum"]["red"]} и ${colors["ru pum pu ru rum"]["blue"]}`
);

// Task 5 🖥
// Дан обьект:
//     let salaries = {
//         andrey: 500,
//         sveta: 413,
//         anton: 987,
//         maxim: 664,
//         alexandra: 199
//     }
// Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  maxim: 664,
  alexandra: 199,
};
let sum = 0;
let i = 0;

for (property in salaries) {
  sum += salaries[property];
  i++;
}
const middle = sum / i;
console.log(middle);

// Task 6 🖥
// Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект. Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение Добро пожалоВать.

// const login = prompt('Type in your login')
// const password = prompt('Type in your password')
// const object = {
// login:login,
// password:password
// }
// const res = confirm('Is your data correct')
// if (res) {
// alert('Добро пожалоВать')
// }
// else {
//     alert('Try again')
// }

//ADVANCED level
// Task 1 👨‍🏫
// Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей. Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами. Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль.

const match = {
  0: "ноль",
  1: "один",
  2: "два",
  3: "три",
  4: "четыре",
  5: "пять",
  6: "шесть",
  7: "семь",
  8: "восемь",
  9: "девять",
};
const count = (first, second) => {
  for (key in match) {
    if (first == key) {
      first = match[key];
    }
    if (second == key) {
      second = match[key];
    }
  }

  res = `${first}:${second}`;
};
count(4, 5);
console.log(res);

//Task 2 🖥
// Даны два одинаковых обьекта. Сравните их так чтобы они были равны
// let student1 = {
//     name: 'Polina',
//     age: 27,
// }
// let student2 = {
//     name: 'Polina',
//     age: 27,
// }

let student1 = {
    name: 'Polina',
    age: 27,
}

let student2 = {
    name: 'Polina',
    age: 27,
}
console.log(Boolean(student1==student2))
student1=student2
console.log(Boolean(student1===student2))

//Task 3 🖥
// У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль. Но произошла ошибка и в этом обьекте нету птицы. Если попробуем узнать имя мы получим ОШИБКУ. Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша программа работала дальше.

const animal = {
    cat: 
    {name:'kot',
age:3
} ,
    dog: 
    {name:'Travis',
age:3
} ,
    fox:     {name:'Travis',
    age:3
    } 
}
console.log(animal.bird?.name)
