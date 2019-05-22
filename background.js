const background = document.getElementById("body");
const button = document.getElementById("button");
const input = document.getElementById("textform");

input.addEventListener("keydown", ()=>{
  background.style.background = input.value;
})
