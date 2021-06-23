// utilities
randomNumber = () => {
    return Math.floor(Math.random() * 256)
}


const skills = [
    {
         name:"#HTML",
         color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#HTMLS",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#CSS",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#JS",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#JavaScript",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#ESG",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#HTML",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#Promise",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#asyn await",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#Database",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#React",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#React Hook",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#Context API",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#React Router",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#Redux",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#Node",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#MongoDb",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#SQl",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#APi",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#DOM",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#data science",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#mern",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#phython",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#Flask",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#Stastictics",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#Linear Algebra",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#numoy",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#Pandas",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#Scipy",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#Scikit-learn",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#Visualization",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    },
    {
        name:"#D3.js",
        color:`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    }
    

]


 const bodyEl = document.querySelector("body")
  bodyEl.style.display = "flex"
  bodyEl.style.flexWrap = "wrap"
  bodyEl.style.justifyContent = "center"
  bodyEl.style.columnGap = "1rem"
  bodyEl.style.rowGap ="1rem"
  bodyEl.textAlign = "center"
  bodyEl.style.padding = "5rem 18rem"
  
  
  let newEl 
  skills.forEach(({name,color}) =>{
      newEl = document.createElement("div")
     newEl.innerHTML = `<span>${name}</span>`
     newEl.style.backgroundColor = `${color}`
     newEl.style.borderRadius = "1.5rem"
     newEl.style.textAlign = "center"
     newEl.style.padding = "0.4rem 1rem"
     bodyEl.appendChild(newEl)
    })