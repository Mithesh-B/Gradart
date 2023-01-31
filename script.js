"use strict";

const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const element = document.querySelector(".color-box");
const degree0 = document.querySelector(".angle-1");
const degree45 = document.querySelector(".angle-2");
const degree90 = document.querySelector(".angle-3");
const degree135 = document.querySelector(".angle-4");
const degree180 = document.querySelector(".angle-5");
const degree225 = document.querySelector(".angle-6");
const degree270 = document.querySelector(".angle-7");
const degree315 = document.querySelector(".angle-8");
const radial = document.querySelector(".angle-0");
const randomizeBtn = document.querySelector(".random-btn");
const outputCode = document.getElementById("css-code");
const section2 = document.querySelector(".generator-heading");
const staticBth = document.querySelector(".static-btn");
/*default gradient value when website loads*/
color1.value = "#2a9d8f";
color2.value = "#f9a261";

element.style.background = `linear-gradient(135deg, ${color1.value}, ${color2.value})`;

let colorValue1 = color1.value;
let colorValue2 = color2.value;
/*gradient orientation*/
const degrees = [
  "0deg",
  "45deg",
  "90deg",
  "135deg",
  "180deg",
  "225deg",
  "270deg",
  "315deg",
];

let currentDegree = "135deg";
let currentGradient = "linear";

/* takes color 1 from color picker and uses a callback function to update the variables */
color1.addEventListener("input", function (event) {
  colorValue1 = event.target.value;
  updateColor(colorValue1, colorValue2, currentDegree);
});

/* takes color 2 from color picker and uses a callback function to update the variables */
color2.addEventListener("input", function (event) {
  colorValue2 = event.target.value;
  updateColor(colorValue1, colorValue2, currentDegree);
});

/* sets a default degree of 135 and uses a callback function to pass it on */
function updateColorWithDegree(degree) {
  currentDegree = degree;
  updateColor(colorValue1, colorValue2, currentDegree);
}

/*below event listners will callback and update the updateColorWithDegree function with degree values from degrees array.*/
degree0.addEventListener("click", function () {
  currentGradient = "linear";
  updateColorWithDegree(degrees[0]);
});
degree45.addEventListener("click", function () {
  currentGradient = "linear";
  updateColorWithDegree(degrees[1]);
});
degree90.addEventListener("click", function () {
  currentGradient = "linear";
  updateColorWithDegree(degrees[2]);
});
degree135.addEventListener("click", function () {
  currentGradient = "linear";
  updateColorWithDegree(degrees[3]);
});
degree180.addEventListener("click", function () {
  currentGradient = "linear";
  updateColorWithDegree(degrees[4]);
});
degree225.addEventListener("click", function () {
  currentGradient = "linear";
  updateColorWithDegree(degrees[5]);
});
degree270.addEventListener("click", function () {
  currentGradient = "linear";
  updateColorWithDegree(degrees[6]);
});
degree315.addEventListener("click", function () {
  currentGradient = "linear";
  updateColorWithDegree(degrees[7]);
});
/* this is a helper function to update css snippet */
function radialUpdate(value1, value2) {
  const code = `background: ${value2}; /* Fallback color */
background: -webkit-radial-gradient(${value1} 0%, ${value2} 100%); /* Safari and Chrome */
background: -moz-radial-gradient(${value1} 0%, ${value2} 100%); /* Firefox */
background: radial-gradient(${value1} 0%, ${value2} 100%); /* Hexadecimal */`;
  const codeHighlight = outputCode;

  codeHighlight.innerHTML = code;
  /* this highlights the css snippet, imported from prism.js */
  Prism.highlightElement(codeHighlight);
}

radial.addEventListener("click", function () {
  currentGradient = "radial";
  element.style.background = `radial-gradient( ${colorValue1}, ${colorValue2})`;

  radialUpdate(colorValue1, colorValue2);
});

/*this functionm checks if event listners have linear or radial gradient and updates CSS accordingly*/
function updateColor(colorValue1, colorValue2, currentDegree) {
  if (currentGradient === "linear") {
    element.style.background = `linear-gradient(${currentDegree}, ${colorValue1}, ${colorValue2})`;

    const code = `background: ${colorValue2}; /* Fallback color */
background: -webkit-linear-gradient(${currentDegree}, ${colorValue1} 0%, ${colorValue2} 100%); /* Safari and Chrome */
background: -moz-linear-gradient(${currentDegree}, ${colorValue1} 0%, ${colorValue2} 100%); /* Firefox */
background: linear-gradient(${currentDegree}, ${colorValue1} 0%, ${colorValue2} 100%); /* Hexadecimal */`;
    const codeHighlight = outputCode;

    codeHighlight.innerHTML = code;
    Prism.highlightElement(codeHighlight);
  } else if (currentGradient === "radial") {
    element.style.background = `radial-gradient( ${colorValue1}, ${colorValue2})`;
    radialUpdate(colorValue1, colorValue2);
  }
}

/*creating gradient randomizer*/

/* generates a random hex value between `00` and `ff` */
const randomHex = () =>
  Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");

/* uses `randomHex` to generate a random color string */
const randomColor = () => `#${[...Array(3)].map(randomHex).join("")}`;

/* returns a random value between 0 and 360 */
const randomAngle = () => `${Math.floor(Math.random() * 361)}deg`;

/* event listner uses the above functions to generate random values for each */
randomizeBtn.addEventListener("click", function () {
  const angle = randomAngle();
  const hex1 = randomColor();
  const hex2 = randomColor();

  colorValue1 = hex1;
  colorValue2 = hex2;
  color1.value = hex1;
  color2.value = hex2;
  currentDegree = angle;

  element.style.background = `linear-gradient(${angle}, ${hex1} 0%, ${hex2} 100%)`;

  const code = `background: ${hex2}; /* Fallback color */
background: -webkit-linear-gradient(${angle}, ${hex1} 0%, ${hex2} 100%); /* Safari and Chrome */
background: -moz-linear-gradient(${angle}, ${hex1} 0%, ${hex2} 100%); /* Firefox */
background: linear-gradient(${angle}, ${hex1} 0%, ${hex2} 100%); /* Hexadecimal */`;

  const codeHighlight = outputCode;

  codeHighlight.innerHTML = code;

  Prism.highlightElement(codeHighlight);
});
/* scroll to section 2 */
staticBth.addEventListener("click", function () {
  section2.scrollIntoView({
    behavior: "smooth",
  });
});
