// utilities
const randomColor = () => {
  return  Math.floor(Math.random() * 256)
}
const containerEl = document.querySelector(".container")
     let j = 0
     const fonts = "200,500,bolder,bold".split(",")
     console.log(fonts.length)
     const fontPx = "2.5,2.8,3.1,3.5".split(",")
     const fonntFam = 'monospace,sans-serif,cursive,fantasy'.split(",")
     let sentence = containerEl.textContent
     console.log(sentence.trim().split(""))
   setInterval(() => {
       j = j === fonts.length-1 ? 0 : j+1  
       console.log(j)
       containerEl.innerHTML = ""
       sentence.trim().split("").forEach(item =>{  
           const newEl = document.createElement("span")
           newEl.textContent = item
           newEl.style.color = `rgb(${randomColor()},${randomColor()},${randomColor()})`
           newEl.style.fontWeight = `${fonts[j]}`
           newEl.style.fontSize = `${fontPx[j]}rem`
           newEl.style.fontFamily = `${fonntFam[j]}`
           containerEl.appendChild(newEl)
       })
   },2000);