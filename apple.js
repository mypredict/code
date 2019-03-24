/*
  果园里有堆苹果，N（1＜N＜9）只熊来分。第一只熊把这堆苹果平均分为N份，多了一个
  它把多的一个扔了，拿走了一份。第二只熊把剩下的苹果又平均分成N份，又多了一个，
  它同样把多的一个扔了，拿走了一份，第三、第四直到第N只熊都是这么做的，问果园里原来最少有多少个苹果？
*/

// 一
const N = 1;
function appleNum (N) {
  let num = 1;
  for (let i=1; i<N; i++) {
    num *= N;
  }
  return (num - 1) * N + 1;
}
console.log(appleNum(N));

// 二
console.log(N ** N - N + 1);