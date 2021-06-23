//utilites
randomNumber = () => {
  return Math.floor(Math.random() * 256);
};

const inputEl = document.getElementById("enter");
const buttonEl = document.getElementById("generate");
const emptyEl = document.querySelector(".empty");
const containerEl = document.querySelector(".container");
const innerContainEl = document.querySelector(".innerContainer");
const errorEl = document.querySelector(".input");

document.querySelector("body").style.textAlign = "center";
document.querySelector("h1").style.color = "green";

innerContainEl.style.display = "flex";
innerContainEl.style.flexDirection = "column";
innerContainEl.style.rowGap = "0.5rem";
innerContainEl.style.alignItems = "center";

inputEl.style.width = "20rem";
inputEl.style.height = "1.5rem";
inputEl.style.borderColor = "green";
inputEl.style.outline = "none";

buttonEl.style.width = "8rem";
buttonEl.style.height = "1.5rem";
buttonEl.style.backgroundColor = "green";

emptyEl.style.display = "grid";
emptyEl.style.gridTemplateColumns = "repeat(6,1fr)";
emptyEl.style.gridGap = "0.2rem";
emptyEl.style.maxWidth = "40rem";
emptyEl.style.margin = "auto";

containerEl.style.padding = "1rem";

buttonEl.addEventListener("click", (e) => {
  let numb = inputEl.value;
  emptyEl.innerHTML = "";
  if (numb.length === 0) {
    errorEl.textContent = "The input is empty,pls enter a number";
    errorEl.style.color = "red";
    errorEl.style.paddingRight = "12rem";

    setTimeout(() => {
      errorEl.textContent = "";
    }, 1000);
  } else if (isNaN(Number(numb)) === true) {
    errorEl.textContent = "Enter numbers only";
    errorEl.style.color = "red";
    errorEl.style.paddingRight = "20rem";

    setTimeout(() => {
      errorEl.textContent = "";
    }, 1000);
  } else {
    for (let i = 0; i <= Number(numb); i++) {
      let newEl = document.createElement("div");
      newEl.textContent = i;
      newEl.style.height = "4rem";
      newEl.style.backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
      newEl.style.display = "flex";
      newEl.style.alignItems = "center";
      newEl.style.justifyContent = "center";
      emptyEl.appendChild(newEl);
    }
  }
  inputEl.value = "";
});
