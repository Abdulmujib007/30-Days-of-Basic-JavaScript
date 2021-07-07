const buttonEl = document.querySelector('.button')
const inputEl = document.querySelectorAll('input') 
const  pEl =    document.querySelector('.fields')
const errorEl = document.querySelectorAll('.error')

buttonEl.addEventListener('click', e => {
    // inputEl.forEach(input => {
        
    // })
    inputEl.forEach((input,inputIndex) => {
        if(input.value && (input.placeholder === `Firstname` || input.placeholder === "Lastname")  && !input.value.match(/^.[A-Za-z]{3,16}$/g)){
            errorEl[inputIndex].textContent = "Must be alphabets with 3 to 16 character"
            errorEl[inputIndex].style.color = "orange"
            errorEl[inputIndex].style.fontSize = '1rem'
            input.value = ''
            setTimeout(() => {
                errorEl[inputIndex].textContent =""
            },2000)
        } else if(input.value &&  input.placeholder === "Email" && !input.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g)){
            errorEl[inputIndex].textContent = "Must be a valid Email address"
            errorEl[inputIndex].style.color = "orange"
            errorEl[inputIndex].style.fontSize = '1rem'
            input.value = ''
            setTimeout(() => {
                errorEl[inputIndex].textContent =""
            },2000)

        } else if(input.value &&  input.placeholder === "Password" && !input.value.match(/^.[a-zA-Z0-9@_-]{3,16}$/g)){
            errorEl[inputIndex].textContent = 'Password must be  3 to 16 character'
            errorEl[inputIndex].style.color = "orange"
            errorEl[inputIndex].style.fontSize = '1rem'
            input.value = ''
            setTimeout(() => {
                errorEl[inputIndex].textContent =""
            },2000)

        } else if(input.value && input.placeholder === 'Telephone' && !input.value.match(/^(\d{11})$/g)){
            errorEl[inputIndex].textContent = "Telephone number must be numbers and 11 char"
            errorEl[inputIndex].style.color = "orange"
            errorEl[inputIndex].style.fontSize = '1rem'
            input.value = ''
            setTimeout(() => {
                errorEl[inputIndex].textContent =""
            },2000)

        } else if(input.value && input.placeholder === "About" && !input.value.match(/^.[a-z-_]{8,50}$/g)){
                errorEl[inputIndex].textContent = "Bio should all be lowercase letters and 8 to 50 char"
                errorEl[inputIndex].style.color = "orange"
            errorEl[inputIndex].style.fontSize = '1rem'
            input.value = ''
            setTimeout(() => {
                errorEl[inputIndex].textContent =""
            },2000)
        } 
         if(!input.value){
            pEl.textContent = "All fields required"
            setTimeout(() => {
                pEl.textContent =""
            },2000)
        } 
        else{
            pEl.textContent = "Submitted succesfully"
            input.value = ""
            setTimeout(() => {
                pEl.textContent =""
            },2000)
        }
    })
})