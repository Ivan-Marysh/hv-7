const number = [5, 11, 15];
number[1] = 10;
console.log(number);



const text = ["text", "banana", "mango"];
text[3] = "apple";
console.log(text);



const numbers = [76, 245, 16, 150];
let guma = 0;
for(let i = 0; i < numbers.length; i++){
    
    guma += numbers[i]
}
console.log(guma);





const number3 = [189, 528, 347, 876, 656];
for (let i = 0; i < number3.length; i++) {
    console.log(cart[i]);
    
}



const omega = ["mather", "danger", "plan", "dead", "color"];
for (let i = 0; i < omega.length; i++) {
    if (omega[i].length > 5) {
        console.log(omega[i]);
    }
    
}


const array = [21, 54, 36, 78, 234, 76, 236, 37, 98, 5];
let maxArray = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] > maxArray) {
        maxArray = array[i];
    }
}
console.log(maxArray);




const arrayNumber = [3, 6, 53, 9, 8, 15, 1728, 41, 87, 34];
for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] % 2 === 0)
    console.log(arrayNumber[i]);
    
}