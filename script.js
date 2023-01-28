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

color1.value = "#2a9d8f";
color2.value = "#f4a261";
element.style.background = `linear-gradient(135deg, ${color1.value}, ${color2.value})`;

let colorValue1 = color1.value;
let colorValue2 = color2.value;

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

color1.addEventListener("input", function (event) {
  colorValue1 = event.target.value;
  updateColor(colorValue1, colorValue2, currentDegree);
});

color2.addEventListener("input", function (event) {
  colorValue2 = event.target.value;
  updateColor(colorValue1, colorValue2, currentDegree);
});

function updateColorWithDegree(degree) {
  currentDegree = degree;
  updateColor(colorValue1, colorValue2, currentDegree);
}

degree0.addEventListener("click", function () {
  updateColorWithDegree(degrees[0]);
});
degree45.addEventListener("click", function () {
  updateColorWithDegree(degrees[1]);
});
degree90.addEventListener("click", function () {
  updateColorWithDegree(degrees[2]);
});
degree135.addEventListener("click", function () {
  updateColorWithDegree(degrees[3]);
});
degree180.addEventListener("click", function () {
  updateColorWithDegree(degrees[4]);
});
degree225.addEventListener("click", function () {
  updateColorWithDegree(degrees[5]);
});
degree270.addEventListener("click", function () {
  updateColorWithDegree(degrees[6]);
});
degree315.addEventListener("click", function () {
  updateColorWithDegree(degrees[7]);
});

function updateColor(colorValue1, colorValue2, currentDegree) {
  element.style.background = `linear-gradient(${currentDegree}, ${colorValue1}, ${colorValue2})`;
}
radial.addEventListener("click", function () {
  element.style.background = `radial-gradient( ${colorValue1}, ${colorValue2})`;
});
