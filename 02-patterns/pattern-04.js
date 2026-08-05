// 1
// 12
// 123
// 1234


// for(let row =0; row<4; row++){
//     let  pattern = "";
//       for(let col =1; col<=row+1;col++){
//         pattern += col
//       }
//       console.log(pattern)
// }



// 5
// 44
// 333
// 2222
// 11111


for(let i= 0;i<5;i++){
  let pattern = "";
  for(let j= 0; j<i+1;j++){
    pattern += 5-i
  }
  console.log(pattern)
}


