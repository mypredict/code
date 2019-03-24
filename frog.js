/*
  一段连续石头 [2,3,2,7,9,4,0,0,1,0,0] 每个石头所在数字为青蛙跳跃最远石头个数
  青蛙是否可以跳到终点
*/

const arr = [2,3,1,1,4];    // ture
// const arr = [3,2,1,0,4]; // false
function isCan (arr) {
  let maxIndex = 0;
  return arr.every((item, index) => {
    if (maxIndex < index) {
      return false;
    }
    maxIndex = Math.max(maxIndex, index + item);
    return true;
  });
}
console.log(isCan(arr));