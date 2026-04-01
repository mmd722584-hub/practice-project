let Fruits= [
    {
        name: "khan",
        age:26,
        city: "bhopal",
        img: "murshid.jpg"


    },
    {
        name: "sadik",
        age:21,
        city: "ujjain",
        img: "murshid.jpg"

    },
    {
        name: "murshid",
        age:20,
        city: "indore",
        img: "murshid.jpg"

    }

]
let show= document.querySelector("#show")
 Fruits.map((e)=>{

    show.innerHTML+=`
    
    <div class="cards">
         <img src="${e.img}" alt="">
        <h1 class="ook">${e.name}</h1>
        <p>${e.age}</p>
        <p>${e.city}</p>
    </div>
    `
    
})
    