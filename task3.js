function calculation(x,y,z){
  if(x==='+'){
     console.log(Number(y)+Number(z));
  }else if(x==='-'){
      console.log(Number(y)-Number(z));
  }else if(x==='*'){
      console.log(Number(y)*Number(z));
  }else{
      console.log(Number(y)/Number(z));
  }
}
let x=prompt("operation");
let y=prompt("second");
let z=prompt("third");
calculation(x,y,z)
