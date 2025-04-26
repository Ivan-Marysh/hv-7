
console.log("1. Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.");

const number = [5, 11, 15];
number[1] = 10;
console.log(number);

console.log("2. Створити масив із трьох рядків. Додати до масиву ще одну рядків.");

const text = ["text", "banana", "mango"];
text[3] = "apple";
console.log(text);

console.log("3. Створити скрипт який поверне суму всіх чисел в масиві.");

const numbers = [76, 245, 16, 150];
let guma = 0;
for(let i = 0; i < numbers.length; i++){
    
    guma += numbers[i]
}
console.log(guma);


console.log("4. Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.");


const number3 = [189, 528, 347, 876, 656];
for (let i = 0; i < number3.length; i++) {
    console.log(number3[i]);
    
}

console.log("5. Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.");

const omega = ["mather", "danger", "plan", "dead", "color"];
for (let i = 0; i < omega.length; i++) {
    if (omega[i].length > 5) {
        console.log(omega[i]);
    }
    
}

console.log("6. Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.");

const array = [21, 54, 36, 78, 234, 76, 236, 37, 98, 5];
let maxArray = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] > maxArray) {
        maxArray = array[i];
    }
}
console.log(maxArray);


console.log("7. Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.");

const arrayNumber = [3, 6, 53, 9, 8, 15, 1728, 41, 87, 34];
for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] % 2 === 0)
    console.log(arrayNumber[i]);
    
}