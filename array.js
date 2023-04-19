const names=['Sunday', 'Felix', 'John', 'Niyi']
//  console.log(names[1])
//  const names = new Array('Sunday', 'Felix', 'John', 'Niyi')
//  console.log(names[3])
names[1]='Ade'
// console.log(names)
const nums =[];
nums[0] = 67
nums[1] = 7
nums[2] = 56
nums[1] =10
// console.log(nums)

// Length

console.log(names.length)

// push()
names.push('Peace', 'Faruq')
// console.log(names[4][0])
//pop()
names.pop()
console.log(names)
//shift()
names.shift()
console.log(names)

// unshift()
names.unshift(true)
console.log(names)

//slice()
console.log(names.slice(2, 4))

//splice()

//  names.splice(1, 2, 'Faruq', 'Adeyemi')

names.splice(1, 0, 'Niyi')
 console.log(names)

 // includes
console.log(names.includes('Niyi'))

// indexof()
console.log(names.indexOf('Niyi'))

// lastIndexof()
console.log(names.lastIndexOf('Niyi'))

//split()
let rand = '12, 34, 56, 67' 
console.log(rand.split(','))

//join()
console.log( (names.join('****')))

//toString()
console.log((names.toString()))