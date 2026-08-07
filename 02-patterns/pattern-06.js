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