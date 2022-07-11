import { morseArray } from "./data/morseArray.js"


const userInput = document.querySelector(".user-input-text");
const button = document.querySelector(".output-button");
const answer = document.querySelector(".output");


const translate = (input) => {

    let individualLetters = Array.from(input.split(""));
    console.log(individualLetters);

}

const printTranslate = (input) => {

    console.log(input);
    return answer.innerText = String(translate(input));

}

//button.addEventListener("click", printTranslate.bind(userInput));



button.addEventListener("click", () => {

    printTranslate(userInput.value);

});



