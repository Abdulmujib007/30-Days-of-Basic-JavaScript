const data = document.getElementById("exercise3");

data.style.display = "flex";
data.style.flexDirection = "column";
data.style.alignItems = "center";

data.innerHTML = `
     <p id ="first-line">Asabeneh yetayeh challenges in <span id ="year">2020</span></p>
     <span id ="javascript">30DaysOfJavaScript Challenge </span>
     <span id ="time"></span>
     <div id ="container">
       <p class = "challenge">30DaysOfPhython Challenge Done</p>
       <p class = "challenge">30DaysOfJavaScript Challenge ongoing</p>
       <p class = "challenge">30DaysOfReact Challenge coming</p>
       <p class = "challenge">30DaysOfReactNative Challenge coming</p>
       <p class = "challenge">30DaysOfFullStack Challenge coming</p>
       <p class = "challenge">30DaysOfdataAnalysis Challenge coming</p>
       <p class = "challenge">30DaysOfMachineLearning Challenge coming</p>
     </div>                  
`;

const firstLine = document.getElementById("first-line");
firstLine.style.fontSize = "1.5rem";
firstLine.style.margin = "0 0 0.7rem 0";
const year = document.getElementById("year");
year.style.fontSize = "3rem";

const secondLine = document.getElementById("javascript");
secondLine.style.textDecoration = "underline";
secondLine.style.fontSize = "1.2rem";

const time = document.getElementById("time");

time.style.marginTop = "1rem";
time.style.width = "15%";
time.style.height = "1.5rem";
time.style.display = "flex";
time.style.alignItems = "center";
time.style.justifyContent = "center";

setInterval(() => {
  const pickedColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)})`;
  time.style.backgroundColor = pickedColor;
  year.style.color = pickedColor;

  const now = new Date();
  string =
    "january,february,march,april,may,june,july,august,september,october,november,december".split(
      ","
    );
  const day = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
  const month = now.getMonth();
  const yearr = now.getFullYear();
  const hours = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
  const minute =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  const second = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
  const fullDate = `${string[month]} ${day},${yearr} ${hours}:${minute}:${second}`;
  time.textContent = fullDate;
}, 1000);

const challenge = document.querySelectorAll(".challenge");
challenges = Array.from(challenge);
challenges.forEach((value, index) => {
  value.style.height = "2.5rem";
  value.style.borderBottom = "2px solid white";
  value.style.display = "flex";
  value.style.alignItems = "center";
  value.style.width = "30rem";
  value.style.margin = "0";
  value.style.paddingLeft = "1rem";
  if (index > 1) {
    value.style.backgroundColor = "red";
  } else if (index == 1) value.style.backgroundColor = "yellow";
  else {
    value.style.backgroundColor = "green";
    value.style.marginTop = "1rem";
  }
});
document.getElementById("container").style.marginLeft = "4rem";
