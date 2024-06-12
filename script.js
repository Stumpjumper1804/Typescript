"use strict";
//
// Basic  Exercise 1
// Make a multiplication table using TypeScript loops from an array with number values 1 to 10 and the result should look like this:
for (let i = 1; i <= 10; i++) {
    console.log(i + " x 1 = " + i * 1);
}
// Exercise 2
// 1. Print your full name in the browser (you will have an object that has 2 properties fName and lName).
let myName = {
    fName: "Albert",
    lName: "Karsai",
};
console.log(myName.fName + " " + myName.lName);
// 2. Print your first name 10 times in the browser using a forEach loop (don't forget that forEach loop works on arrays, so you can put the object in an array and repeat it).
let myNameArray = [myName];
myNameArray.forEach((element) => {
    for (let i = 1; i <= 10; i++) {
        console.log("this comes fom the loop: " + element.fName);
    }
});
// 'Array<string[]>
// let array: Array<number[]> = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// 3. A function should be triggered 5 seconds after opening the page that prints your last name in the console 10 times.
setTimeout(() => {
    myNameArray.forEach((element) => {
        for (let i = 1; i <= 10; i++) {
            console.log("this comes from the timed function: " + myName.fName);
        }
    });
}, 5000);
// Exercise 3
// Create an array of names, this array should only accept strings.
let names = ["Albert", "Maria", "Michael", "Susi"];
// 1. Print only the index of the elements.
names.forEach((element, index) => {
    console.log(index);
});
// 2. Print only the values.
names.forEach((element, index) => {
    console.log(element);
});
// 3. Print both index and values.
names.forEach((element, index) => {
    console.log("from Ex3: " + index + ": " + element);
});
