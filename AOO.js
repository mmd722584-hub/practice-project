let my =["Apple","mango","banana"]

console.log(my[1]);


let Fruits= [
    {
        name: "khan",
        age:26,
        city: "bhopal"


    },
    {
        name: "sadik",
        age:21,
        city: "ujjain"
        

    },
    {
        name: "murshid",
        age:20,
        city: "indore"
        

    }

]
// console.log(Fruits[1].city)

// console.log(Fruits)



let num = [7 ,3, 8,78 , 777,85]


let newarr= num.map( (e)=>{           // map mathod ye sirf array pe work karta hai aur multiplay ,addition, sub, division ,
    return e*2
}  )
// console.log(newarr);



let newfilter= num.filter( (e)=>{

    return e%2==0
}  )

console.log(newfilter);         //filter method ye even odd etc 





