// let marks = 2;
// if (marks<0 || marks>100){
//     console.log("invalid marks")
// }
// else if(marks >=90 && marks<=100){
//     console.log("grade A")
// }

// else if(marks >=70 && marks<=89 ){
//       console.log("grade B")
// }
// else if(marks >=50 && marks<=69){
//     console.log("grade c")
// }
// else if(marks >=40 && marks<=49){
//     console.log("grade d")
// }
// else{
//     console.log("fail")
// }
// // 6. Write a program to check if a number is divisible by both 3 and 5.
// let number=17;

// if((number%3==0) && (number%5==0) ){
//     console.log("it is divisble")
// }
// else{
//     console.log("number is not divisble")
// }

//5. Write a program to check if a year is a leap year.
//  let year =299;

// if( year%4 ==0 && year%100 != 0  ||  year%400==0){
//     console.log("it is leap year")
// }
// else{
//     console.log("it is not a leap year")
// }
// 1. Write a program to check if a number is positive, negative, or zero.
// let nu = 0.2;
// if(nu > 0){
//     console.log("number is positive")
// }
//   else if(nu<0){
//     console.log("number is negative")
// } else{
//     console.log("number is zero")
// }
// 
// 2. 1) Let us write our first program based on conditions. Write a program to input user age and check if he is eligible to vote in India or not. A person in India is eligible to vote if he is 18+.
// . Write a program to check if a number is even or odd.
// let n=29;
// if(n%2==0){
//     console.log("number is even")
// }
// else{
//     console.log("odd")
// } 
// . Write a program that checks whether a character is a vowel or consonant. 
// unit=350;
// 50=0.50  == 25
// 100=0.75 == 75
// 100=1.25 == 240
// 20% Charge
// let cha='A';

// if( cha == 'a' ||  cha == 'e'||   cha == 'i'||  cha == 'o' ||  cha == 'u'){
//     console.log("vowel")
// }
// else{
//     console.log("constant")
// }9. Write a program that checks whether a number is prime.
// let a=20;
// if(a%1==0 && a%a==0){
//     console.log("prime")
// }
// else{
//     console.log("no prime")
// } unit =350
//  50=0.50;
//  100=0.75;
//  100=1.25;
// //  20% charge
// let unit =350;
// let remainingunit=0;
// if(unit>50 ){
//     remainingunit = remainingunit + (50 * 0.50)
//     unit = unit - 50;
 
// }
//  if(unit>100){
//      remainingunit = remainingunit + (100 * 0.75)
//     unit = unit - 100;
//     remainingunit=remainingunit +(unit*1.25)
// }
// else{
//   remainingunit = remainingunit + (unit * 0.50);
// }
let a =1880;
if(a>=500){
    console.log("500 k note",parseInt(a/500))
    a=a%500;
}
if(a>=200){
    console.log("200 k note",parseInt(a/200))
    a=a%200;
}
if(a>=100){
    console.log("100 k note",parseInt(a/100))
    a=a%100;
}
if(a>=50){
    console.log("50 k note",parseInt(a/50))
    a=a%50;
}
if(a>=20){
    console.log(parseInt(a/20))
    a=a%20;
}
if(a>=10){
    console.log(parseInt(a/10))
    a=a%10;
}