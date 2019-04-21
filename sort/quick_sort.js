// 快速排序
const arr = [3,4,2,6,2,8,5,0,9,1,2,2,2,2];
function quickSort (arr) {
  const sort = (baseValue, leftIndex, rightIndex) => {
    if (leftIndex >= rightIndex) {
      return;
    }
    const baseLeftIndex = leftIndex;
    const baseRightIndex = rightIndex;
    // 左指针等于右指针时完成一次遍历分组
    while (leftIndex < rightIndex) {
      // 右指针数据大于等于基准值时减小右指针
      while (arr[rightIndex] >= baseValue && leftIndex < rightIndex) {
        rightIndex--;
      }
      [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]];
      // 左指针数据小于等于基准值时增大左指针
      while (arr[leftIndex] <= baseValue && leftIndex < rightIndex) {
        leftIndex++;
      }
      [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]];
    }
    arr[leftIndex] = baseValue;
    sort(arr[baseLeftIndex], baseLeftIndex, leftIndex - 1);
    sort(arr[leftIndex + 1], leftIndex + 1, baseRightIndex);
  }
  sort(arr[0], 0, arr.length - 1);
  return arr;
}
console.log(quickSort(arr));