// canvas setup
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;

// background setup
const bgReady = false;
const bgImage = new Image();
bgImage.src = "images/background.png";
bgImage.onload = function () {
  bgReady = true;
} 

// background setup
const heroReady = false;
const heroImage = new Image();
heroImage.src = "images/hero.png";
heroImage.onload = function () {
  heroReady = true;
} 

// background setup
const monsterReady = false;
const monsterImage = new Image();
monsterImage.src = "images/monster.png";
monsterImage.onload = function () {
  monsterReady = true;
} 