function multiplicationTable(size) {
  if (size < 1) {
    return [];
  }
​
  const table = [];
  for (let i = 1; i <= size; i++) {
    const row = [];
    for (let j = 1; j <= size; j++) {
      row.push(i * j);
    }
    table.push(row);
  }
  return table;
}
​