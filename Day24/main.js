const selectEl = document.getElementById("select")

const planets = "earth,mercury,jupiter,mars,moon,pluto,saturn,uranus,venus".split(",")
planets.forEach(value => {
    let newEl = document.createElement("option")
    newEl.textContent = value
    selectEl.append(newEl)
})

  const imgEl = document.querySelector("img")
  const massEl = document.querySelector(".required")
  massEl.style.backgroundColor = "rgba(255,255,255,0.15)"
  massEl.style.padding = "1rem 4rem"
  massEl.style.borderRadius = "5px"
  massEl.style.textAlign = "center"
selectEl.addEventListener("change",e => {
    let value = e.target.value
     imgEl.classList.remove("hide")
     massEl.classList.add("hide")    
     
     imgEl.setAttribute("src",`./images/${value}.png`)
     imgEl.style.width = "25rem" 
       
})
   const weights = {
     moon:2.3
   ,
   
   earth:2.0
   ,
   
   mercury: 1.4
   ,
   
   jupiter:3.0
   ,
   
   mars:2.22
   ,
   
   pluto:0.4
   ,
   
   saturn:2.4
   ,
   
   uranus:5.0

   ,   
   venus:1.0                  
  }

const buttonEl = document.querySelector(".calculate")
const inputEl = document.querySelector("input")
buttonEl.addEventListener("click", e => {
  e.preventDefault()
    const inputValue = Number(inputEl.value)
    const planet  = selectEl.value
    massEl.classList.remove("hide")
    console.log(weights[planet])
    if(!planet || !planets.includes(planet)){
      massEl.textContent = "Select a planet"
        return 
    }
    const weight = Math.floor(inputValue / weights[planet])
    console.log(weight)
    massEl.innerHTML = `The weight of the object on planet <span class = "bold">${planet}</span> <br><p class ="newspan">${weight}.00N</p>` 
    const pEl = document.querySelector(".newspan")
pEl.style.backgroundColor = "rgba(255,255,255,0.2)" 
pEl.style.borderRadius = "50%"
pEl.style.padding = "1rem"
pEl.style.marginLeft = "15rem"
pEl.style.width = "fit-content"


})

