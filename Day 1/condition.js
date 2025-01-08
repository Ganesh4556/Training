// let day = prompt("Enter the number:");

// if (day == 1) {
//     console.log("mon");
// } else if (day == 2) {
//     console.log("tue");
// } else if (day == 3) {
//     console.log("wed");
// } else if (day == 4) {
//     console.log("thu");
// } else if (day == 5) {
//     console.log("fri");
// } else if (day == 6) {
//     console.log("sat");
// } else if (day == 7) {
//     console.log("sun");
// } else {
//     console.log("Invalid day number");
// }


// // ASSIGNMENT:
// // Write a condition to check greatest among 3 number 
// // let a=20;
// // let b=30;
// // let c=40;


let a=prompt("Enter the number:");
let b=prompt("Enter the number:");
let c=prompt("Enter the number:");

if (a > b && a > c) {
    console.log("The greatest number is a:", a);
} else if (b > a && b > c) {
    console.log("The greatest number is b:", b);
} else {
    console.log("The greatest number is c:", c);
}
