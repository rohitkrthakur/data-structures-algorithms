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


// for ( let row=0; row<4; row++){
//     let pattern = "";
//      for(let col=1; col<=row+1; col++){
//         pattern += col;
//      }
//      console.log(pattern)
// }



// 1
// 22
// 333
// 4444


// for(let row =1; row<=4; row++){
//     let pattern = "";
//       for (let col =1; col<=row; col++){
//         pattern  += row;
//       }
//       console.log(pattern)
// }


// 1234
// 123
// 12
// 1


// for(let row=0 ; row<=4; row++){
//     let pattern = "";
//      for(let col =1; col<= 4-row; col++){
//           pattern +=  col
//      }
//      console.log(pattern)
// }


// *
// **
// ***
// ****
// ***
// **
// *

// for(let i =1; i<=4; i++){
//      let pattern = "";
//      for(let j =1; j<=i; j++){
//         pattern += "*";

        
//      }
//      console.log(pattern)
// }

// for (let i=1; i<=4; i++){
//     let pattern = "";
//     for(let j=1; j<=4-i; j++){
//         pattern += "*";

//     }
//     console.log(pattern)
// }





//    *
//   ***
//  *****
// *******


// let pattern = "";

// 3 space

// for(let i=0; i<4; i++){
//      let pattern = "";


// for(let j=0; j<= 4-i; j++){
//     pattern += " "
// }
// for(let j=0; j<=2*i-1; i++){
//       pattern += "*";

//       console.log(pattern)    
// }
// }

// 1
// 23
// 456
// 78910

// If the value to print depends only on the current row
// → use i

// If the value changes continuously across rows
// → create a new variable (num, count, value, etc.)
let num = 1;

for (let i = 0; i < 4; i++) {
    let pattern = "";

    for (let j = 0; j < i + 1; j++) {
        pattern += num;
        num++;
    }

    console.log(pattern);
}