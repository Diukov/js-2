let date = new Date();

let currentYear = date.getFullYear();

let birthYear = Number(prompt('Введите год рождения'));

if ((currentYear - birthYear) < 100) {
  console.log('значит, Вам ' + String(currentYear - birthYear) + ' лет');
} else {
  console.log('Вам ' + String(currentYear - birthYear) + ' лет. Вероятнее всего, Вы мертвы... ');
}