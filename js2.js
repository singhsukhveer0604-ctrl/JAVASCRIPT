// let a=1;
let b=11;
let c=11;
if(a<b && a<c ){
    console.log("a is greater");
    `` }
else if(a==b && c<a && c<b){
   console.log("yes a and b are equal c is greater than a and b");
}
else if(a==c && a<c && b<c){
   console.log("yes a and c is greater than b");
}
else if(b==c && b<a && c<a){
   console.log("yes b and c is greater than a");
}
else if(a==c && a<b && c<b){
   console.log("yes a and c is greater than b");
}
else if(b<a && b<c ){
    console.log("b is greater");
}
else if(c<a && c<b ){
    console.log("c is greater");
}
else {
    console.log("all are equal")
}