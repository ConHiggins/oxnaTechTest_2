import { morseArray } from "./data/morseArray.js"
import { translate, printTranslate } from "./functions.js";

const userInput = document.querySelector(".user-input-text");
const button = document.querySelector(".output-button");
const answer = document.querySelector(".output");


console.log("running");

button.addEventListener("click", () => {

    answer.innerText = printTranslate(userInput.value);

});



