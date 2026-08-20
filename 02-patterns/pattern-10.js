for (let i = 0; i < 5; i++) {
    let pattern = "";

    for (let j = 1; j <= 5 - i; j++) {
        pattern += j;
    }

    console.log(pattern);
}