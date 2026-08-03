// 1
// 22
// 333
// 4444

// for(let row =1; row<=4; row++){
//     let  pattern = "";
//       for(let col =1; col<=row;col++){
//         pattern += row
//       }
//       console.log(pattern)
// }

// 1
// 12
// 123
// 1234


for ( let row=0; row<4; row++){
    let pattern = "";
     for(let col=1; col<=row+1; col++){
        pattern += col;
     }
     console.log(pattern)
}

