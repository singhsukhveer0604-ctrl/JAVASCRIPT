// var g="female";
// let age="30";
// let m="yes" ;
// if(g =="male" && age < 45  && m =="yes") {
//     console.log("selected");
// }
//  else if(g="female" && age < 35 && m =="yes"){
//       console.log("selected");
//  }
// else {
//      console.log("unselected");
// }
// let a=10;
// let b=2;
// let c=2;
// if(a<b && a<c )
// {
//     console.log("a is small");
// }
// else if(b<a && b<c && b==c ){
//     console.log("b is small ");
// }
// Print the grade based on marks:
// 90–100 → A
// 80–89 → B
// 70–79 → C
// 60–69 → D
// Below 60 → Fail
// else{
//     console.log("c is small")
// }
// let marks = -3;
// if (marks<0 || marks>100){
//     console.log("invalid marks")
// }
// else if(marks >=90 && marks<=100){
//     console.log("grade A")
// }

// else if(marks >=80 && marks<=89 ){
//       console.log("grade B")
// }
// else if(marks >=70 && marks<=79){
//     console.log("grade c")
// }
// else if(marks >=60 && marks<=69){
//     console.log("grade d")
// }
// else{
//     console.log("fail")
// }
let amount=193000;
if( amount >= 500 ) 
{
   console.log("500 k note",parseInt(amount/500));
    amount =amount%500 ;
    
}
if(amount >= 200){
    let note=parseInt(amount/200);
  
     amount=amount%200;
       console.log(note,"200 k note")
}
if( amount >= 100 ) 
{
    let note=parseInt(amount/100);
    amount =amount%100 ;
    console.log(note,"100 k note")
}
if( amount >= 50 ) 
{
    let note=parseInt(amount/50);
    amount =amount%50 ;
    console.log(note,"50 k note")
}
if( amount >= 20 ) 
{
    let note=parseInt(amount/20);
    amount =amount%20 ;
    console.log(note,"20 k note")
}
if( amount >= 10 ) 
{
    let note=parseInt(amount/10);
    amount =amount%10 ;
    console.log(note,"10 k note")
}



