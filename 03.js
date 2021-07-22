//把所有元素累積 => 32
const lists = [4, 2, 1, 4, 6, 8, 7]
// let total = 0
//  for(var i = 0; i < lists.length ; i++){
//      total = total + lists[i]
// }

// console.log(total)

let total = 0
lists.forEach((x) => {
    total += x
})

console.log(total)