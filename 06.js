// const lists = [2, 4, 1, 8, 7, 3, 5]



// const result = lists.filter( n => n >4)
// console.log(result)  // 印出 [ 8, 7, 5 ]

x => x > n
const lists = [2, 4, 1, 8, 7, 3, 5]
function greaterThan(n) {
  return function(x) {
  return x > n
  }
}
const result = lists.filter(greaterThan(4))
console.log(result)  // 印出 [ 8, 7, 5 ]