function powersOfTwo(n) {
    let powers = [];
    for ( i = 0; i <= n; i++) {
        let answer = 2**i
        powers.push(answer)
    }
    return powers;
}