function findOdd(a) {
    let m = new Map();
​
    a.forEach(e => m.set(e, (m.get(e) || 0) + 1));
    for (let [k, v] of m) {
        if (v % 2 !== 0) return k;
    }
}