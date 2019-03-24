// 给定一个由若干 0 和 1 组成的数组 A，我们最多可以将 K 个值从 0 变成 1 。
// 返回仅包含 1 的最长（连续）子数组的长度。

// 1 <= A.length <= 20000
// 0 <= K <= A.length
// A[i] 为 0 或 1 

/*
  输入：A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
  输出：6
  解释： 
  [1,1,1,0,0,1,1,1,1,1,1]
  粗体数字从 0 翻转到 1，最长的子数组长度为 6。
*/

/*
  输入：A = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
  输出：10
  解释：
  [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
  粗体数字从 0 翻转到 1，最长的子数组长度为 10。
*/

const A = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1];
const K = 3;

// const A = [0,0,0,1];
// const K = 4;

const longestOnes = function(A, K) {
  let maxNum = 0;
  let remNum = 0;
  let ALen = A.length;
  let index0 = []; // 存储 0 的下标
  A.forEach((item, index) => {
    if (item === 1) {
      remNum++;
    } else {
      index0.push(index);
      if (K > 0) {
        remNum = index + 1;
        K--;
      } else {
        remNum = index - index0.shift();
      }
    }
    maxNum = Math.max(remNum, maxNum);
  });
  return maxNum;
};

console.log(longestOnes(A, K));