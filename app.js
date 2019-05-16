let numCircles = 6;

let colors  = [
  "rgb(255, 0, 0)",
  "rgb(255, 0, 255)",
  "rgb(255, 225, 0)",
  "rgb(255, 0, 255)",
  "rgb(0, 255, 255)",
  "rgb(0, 255, 0)"
];

let pickedColor;
let circles = document.querySelectorAll(".circle");
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");

for (let i = 0; i < circles.length; i++){
  circles[i].style.backgroundColor = colors[i]
};

for (let i = 0; i < circles.length; i++) {
  circles[i].addEventListener('click', function() {
    alert('option was clicked!');
  })
}
