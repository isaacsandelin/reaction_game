const clickArea = document.querySelector(".click-area");
const displayText = document.querySelector(".display-text");
const scoreElements = document.querySelectorAll(".score");

const scoreHistory = [];

const MINIMUM_MS_TILL_CHANGE = 3000;
const MAXIMUM_MS_TILL_CHANGE = 10000;

let msSinceEpochOnTimeout = 0;
let waitingForClick = false;