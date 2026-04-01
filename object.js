let student1 = { name: "john",age:25};
let student2 = {city: "New York", grade: "A"};
// console.log(student1)

let combineStudent ={...student1, ...student2};
console.log(combineStudent)


let student = {name: "john", age: 29,city:"bhopal"}
let {name,age,city} =student;
console.log(age,name,city);