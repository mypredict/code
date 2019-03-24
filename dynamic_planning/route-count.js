/*
  rows 行
  columns 列
  组成的矩形格子
  只能向右或向下
  从 [1, 1] => [columns, rows] 共有多少种路线
*/

const rows = 7;
const columns = 8;
function routeCount (rows, columns) {
  // f[i][j] = f[i-1][j] + f[i][j+1]
  const f = [];
  for (let row=0; row<rows; row++) {
    f[row] = [];
    for (let column=0; column<columns; column++) {
      if (row === 0 || column === 0) {
        f[row][column] = 1;
      } else {
        f[row][column] = f[row - 1][column] + f[row][column - 1];
      }
    }
  }
  return f[rows - 1][columns - 1];
}
console.log(routeCount(rows, columns))