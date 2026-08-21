// for (let i = 0; i < 5; i++) {
//     let pattern = "";

//     for (let j = 1; j <= 5 - i; j++) {
//         pattern += j;
//     }

//     console.log(pattern);
// }


for (let i = 0; i < 5; i++) {
    let pattern = "";

    for (let j = 0; j < i + 1; j++) {
        pattern += i + 1;
    }

    console.log(pattern);
}