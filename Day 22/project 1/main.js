  
randomNumber = () => {
    return Math.floor(Math.random() * 256);
  };

   const bodyEl = document.querySelector("body")
   const headEl = document.querySelector(".head")
    headEl.style.display ="grid"
    headEl.style.gridTemplateColumns = "repeat(6,1fr)"
    headEl.style.maxWidth = "40rem"
    headEl.style.gridGap = "0.2rem"
    headEl.style.margin = "auto"

   
    let numberEl
    for(let i = 0; i <= 101;i++){
        numberEl = document.createElement("div")
        numberEl.textContent = i
        numberEl.style.display = "flex"
        numberEl.style.alignItems = "center"
        numberEl.style.justifyContent = "center"
        numberEl.style.fontSize = "1.5rem"
        numberEl.style.height = "4rem"
        numberEl.style.backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
        
        headEl.appendChild(numberEl)
    }









