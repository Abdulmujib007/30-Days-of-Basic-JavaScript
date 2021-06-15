const firstP = document.querySelector('p')
console.log(firstP)
const p1 = document.querySelector("#first")
const p2 = document.querySelector("#second")
const p3 = document.querySelector("#third")
const p4 = document.querySelector("#fourth")
console.log(p1,p2,p3,p4)

const nodeLIst = document.querySelectorAll("p")
console.log(nodeLIst)


nodeLIst.forEach(value => console.log(value.textContent))   
console.log(nodeLIst[nodeLIst.length-1].textContent = "Am overwriting this line")


nodeLIst.forEach(list => list.setAttribute("id","paragraphs"))
nodeLIst.forEach(list => list.classList.add("name"))

const nodeList =Array.from(nodeLIst)
console.log(nodeList)

nodeList.forEach((item,index) => {
    item.style.fontSize = "2rem"
    item.style.fontFamily ="monospace" 
    if(index % 2){
       item.style.color ="green"
   } else{
       item.style.color ="red"
   }
})








