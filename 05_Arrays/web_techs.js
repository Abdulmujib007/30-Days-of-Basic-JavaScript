const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

if (webTechs.includes("Sass")) {
  console.log("Sass is a css preprocess");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
