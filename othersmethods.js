const names = ["sunday", 'Peace', 'Kabir', 'Iyin', "Samuel"];
const nums =[23, 45, 200, 67, 78, 100, 500]
// names.sort()
// names.reverse()
nums.sort(function(a, b){
    return a-b
})

// function numsSort(a, b){
//     return b-a
// }

const users=[
    {id:1, name:'Peace', age:45, address:'Osogbo', socialMedia:{facebook:'peace', twitter:'@peacecom'}}, 
    {id:1, name:'Iyin', age:5, address:'Lagost'}, 
]
//filter()
const newwnums = nums.filter(function(value, index, arr ){
    return index < 3
})

//find()

// const findDetail = users.find(function(value){
//     return value.socialMedia
// })
const findDetail = nums.find(function(value){
    return value > 50
})

console.log(findDetail)

// every()
const everynum = nums.every((value)=>{
   return value > 3
})
console.log(everynum)
// some()
const somenum = nums.some((value)=>{
    return value > 200
 })
 console.log(somenum)
 //findIndex()
 const findindexNums= nums.findIndex((value)=>{
   return  value > 20
 })

 const findindexUser = users.findIndex(function(value){
    return value.socialMedia
})

const sumofNumbers = nums.reduce((start, total)=>{
    return start - total
}, 100)
 console.log(sumofNumbers)

 //map()
let scores=[34, 56, 67, 78,45,78,54,58.98]

//  const numsMap = nums.map((value, index, arr)=>{
//     return value/2
//  })
const punishment = scores.map((value)=>{
       let condition;
       if((value-10) >= 50){
        condition="Free"
       }else if((value-5)>= 50){
        condition ="Escaped"
       }else{
        condition ="Punished"
       }
  return condition
})
console.log(punishment)
//  console.log(numsMap)

   const foreachpunish=[]
 scores.forEach((value, index, arry) => {
    let condition;
    if((value-10) >= 50){
     condition="Free"
    }else if((value-5)>= 50){
     condition ="Escaped"
    }else{
     condition ="Punished"
    }
    foreachpunish[index] = condition
 });
 console.log(foreachpunish)