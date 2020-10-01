/*Задание 1
Напиши скрипт, который, для объекта user, последовательно:

добавляет поле mood со значением 'happy'
добавляет поле 'full time' со значением true
заменяет значение hobby на 'skydiving'
заменяет значение premium на false
выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};;*/

let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};

//Write code under this line
user.mood = 'happy';
user['full time'] = true;
user.hobby = 'skydiving';
user.premium = false;
const keys = Object.keys(user);
// Write code under this line
for (const key of keys) {
  message += `${key} : ${user[key]} ${'\n'}`;
}
console.log(message);
/*
'age : 20
hobby : skydiving
name : Mango
premium : false
mood : happy
"full time" : true
' */
