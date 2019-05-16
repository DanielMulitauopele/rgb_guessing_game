const randomColor = (colors) => {
  return colors[Math.floor(Math.random() * (numCircles - 1) + 1)]
}

const fillColors = () => {
  for (let i = 0; i < circles.length; i++){
    circles[i].style.backgroundColor = colors[i]
  };
};

const runGame = () => {
  for (let i = 0; i < circles.length; i++) {
    circles[i].addEventListener('click', function() {
      let clickedColor = this.style.backgroundColor;

      if (clickedColor == pickedColor) {
        alert('That is correct!');
        fillColors();
      } else {
        this.style.backgroundColor = "#232323";
        alert('That is incorrect!');
      }
    })
  }
}

let numCircles = 6;
const circles = document.querySelectorAll(".circle");
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");
let colors  = [
  "rgb(255, 0, 0)",
  "rgb(255, 0, 255)",
  "rgb(255, 225, 0)",
  "rgb(255, 0, 255)",
  "rgb(0, 255, 255)",
  "rgb(0, 255, 0)"
];
let pickedColor = randomColor(colors);

fillColors();
runGame();
