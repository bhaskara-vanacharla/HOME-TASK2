let a=[]
let x=prompt("enter the size of array");
for(var k=0;k<x;k++){
 a[k]=prompt("enter the array element");
}
printarray(a)
function printarray(a){
  console.log(a.join(','))
}