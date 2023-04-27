

const users=`[
    {
        "name": "Ojo", "age":23, "socialMedia": {"twitter":"Ojo", "facebook": "Ojo"},
        "name": "Peace", "age":33, "socialMedia": {"twitter":"peace", "facebook": "peace"}
    }
]`
let newUsers=[
    {id:1, name:'Peace', age:45, address:'Osogbo', socialMedia:{facebook:'peace', twitter:'@peacecom'}}, 
    {id:1, name:'Iyin', age:5, address:'Lagost'}, 
]

newUsers= JSON.stringify(newUsers)
console.log(newUsers)
const nums= "[45, 56, 67, 78, 78]";
const newNums = JSON.parse(nums)
    user = JSON.parse(users)
console.log(nums)
console.log(Array.isArray(newUsers))