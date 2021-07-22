const heroes = [
    { name: "悟空", power: 500 }, 
    { name: "克林", power: 700 }, 
    { name: "達爾", power: 450 }, 
    { name: "18號", power: 80 }
  ]


//   let r = heroes.reduce((acc, hero) => {
//       return acc + hero.power
//   }, 0)
//   console.log(r)



let r = heroes.reduce((max, hero) => {
    if (hero.power < max){
       return hero.power
   } else {
       return max
   }
},700)

console.log(r)

    

