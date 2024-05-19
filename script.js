"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Yeheyyy 🥳...Pero seryoso, gusto ko lang gd maaraman kun nano gd an reason nano kay irog na kita sani. May nangyari ba? Nagkaproblema ba? May nagawa ba akong mali? Kun igwa mn or gusto mo na iudong pangungulit ko oks la nmn basta maaraman ko la gd an reason :) Oo na! Oayy na kung Oayy"
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Dali naaaa😫",
    "Please😢",
    "Ayaw sanaaa😭",
    "😥",
    "🥺",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/pic-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
