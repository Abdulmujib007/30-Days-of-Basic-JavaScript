const deleteEl = document.querySelector('.delete')
const addEl = document.querySelector('.add')
const subtactEl = document.querySelector('.subtract')
const buttonEl = document.querySelector("button")
const inputEl = document.querySelectorAll("input")
const pEl  =document.querySelector("p")
const personEl = document.querySelector(".inner1")
let scoreEl = document.querySelector('.score')
container2El = document.querySelector('.container2')




buttonEl.addEventListener("click", e => {
    inputEl.forEach(input => {
        if(!input.value){
            pEl.textContent = "All fields required"
            pEl.style.color = 'red'
            setTimeout(() => {
                pEl.textContent = ''
            },2000)
        } 
        
    })
    if(inputEl[0].value && inputEl[1].value && inputEl[2].value && inputEl[3].value){
            const newEl = document.createElement("div")
            newEl.classList.add('inner1')
            newEl.innerHTML = `<div class="inner2">
            <span class='fullname'>${ inputEl[0].value} ${inputEl[1].value}</span>
            <span>JUN 30 2021 10:51</span>
            </div>
            <span class="nation">${inputEl[2].value }</span>
            <span class="score">${inputEl[3].value}</span>
            <div class="events">
            <img class="delete" src="./delete-bin-6-line.svg" alt="">
            <span class ='add'>+5</span>
            <span class='subtract'>-5</span>
            </div>`

            
            console.log(newEl)
            container2El.appendChild(newEl)
            let deleteEls = document.querySelectorAll('.delete')
            let personEls = document.querySelectorAll(".inner1")
            let addEls = document.querySelectorAll('.add')
            let subtractEls = document.querySelectorAll(".subtract")
            let scoreEls = document.querySelectorAll('.score')

            let currentPersonEl = personEls[personEls.length -1]
            let currentDeleteEl = deleteEls[deleteEls.length -1]
            let currentAddEl = addEls[addEls.length - 1]
            let currentScoreEl =  scoreEls[scoreEls.length - 1]
            let currentSubtractEl = subtractEls[subtractEls.length - 1]
            

            currentDeleteEl.addEventListener('click', e => {
                currentPersonEl.remove()
            })
            currentAddEl.addEventListener('click', e => {
                  let number = Number(currentScoreEl.textContent)
                  number+=5
                  currentScoreEl.textContent = number
            })
            currentSubtractEl.addEventListener('click', e => {
               let number =  Number(currentScoreEl.textContent)
               number-= 5
               currentScoreEl.textContent = number
            })
            
        }
     inputEl.forEach(value => value.value = "")

    })
    


deleteEl.addEventListener('click', e => {
    personEl.remove()
        
   })
   subtactEl.addEventListener('click', e => {
      let number = Number(scoreEl.textContent)
      number-=5 
      scoreEl.textContent = number
       console.log(scoreEl)
   })
   addEl.addEventListener('click', e => {
     let number = Number(scoreEl.textContent)
     number+=5 
      scoreEl.textContent = number
       console.log(scoreEl)
   })