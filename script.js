"use strict";
const cardArray = [
  {
    name: "fires",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fires",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());
console.log(cardArray); // to test if it is random

let cardsChosen = [];
let cardsChosenIDs = [];
const cardsWon = [];

const grid = document.querySelector(".grid");

const createBoard = function () {
  for (var i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.append(card);
    console.log(card, i);
  }
};
createBoard();

// const flipCard = function () {
//   console.log("clciked");
// };

function checkMatch() {
  const cards = document.querySelectorAll(".grid img");
  console.log("check for match");
  if (cardsChosen[0] === cardsChosen[1]) {
    console.log("match");
    cards[cardsChosenIDs[0]].setAttribute("src", "images/white.png");
    cards[cardsChosenIDs[1]].setAttribute("src", "images/white.png");
    cards[cardsChosenIDs[0]].removeEventListener("click", flipCard);
    cards[cardsChosenIDs[1]].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[cardsChosenIDs[0]].setAttribute("src", "images/blank.png");
    cards[cardsChosenIDs[1]].setAttribute("src", "images/blank.png");
  }
  cardsChosen = [];
  cardsChosenIDs = [];
}

function flipCard() {
  let cardID = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardID].name);
  // console.log(cardArray[cardID].name);
  // console.log("clicked", cardID);
  this.setAttribute("src", cardArray[cardID].img);
  cardsChosenIDs.push(cardID);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
