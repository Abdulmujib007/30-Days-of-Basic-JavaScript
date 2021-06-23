const keysEl = document.getElementById("keys");
const characterEl = document.getElementById("character");
const bodyEl = document.querySelector("body");

bodyEl.style.display = "flex";
bodyEl.style.flexDirection = "column";
bodyEl.style.rowGap = "1rem";
bodyEl.style.alignItems = "center";
bodyEl.style.justifyContent = "";
bodyEl.style.paddingTop = "10rem";

keysEl.style.border = "1px solid lightgray";
keysEl.style.fontSize = "2rem";
keysEl.style.padding = "1rem";
keysEl.style.boxShadow = "1px 1px 5px 2px rgba(0,0,0,0.2)";

characterEl.style.fontSize = "3rem";
characterEl.style.padding = "1rem";

window.addEventListener("keypress", (e) => {
  let letters = e.code.replace("Key", "");
  keysEl.style.backgroundColor = "white";

  let char = e.keyCode;
  characterEl.style.boxShadow = "1px 1px 5px 2px rgba(0,0,0,0.2)";
  characterEl.style.border = "1px solid lightgray";

  if (letters.length === 1) {
    keysEl.innerHTML = `You pressed letter <span class = "green">${letters}</span>`;
    document.querySelector(".green").style.color = "green ";
  } else if (letters.length > 1) {
    keysEl.innerHTML = `You pressed <span class = "green">${letters}</span>`;
    document.querySelector(".green").style.color = "green ";
  }

  characterEl.textContent = char;
  characterEl.style.color = "green";
});
