import { morseArray } from "./data/morseArray.js";

export const translate = (input) => {

    let outputArr = [];
    let individualLetters = Array.from(input.toUpperCase().split(""));
    
    for(let i=0; i<individualLetters.length; i++) {

        let ASCIIchar = individualLetters[i].charCodeAt(0);
        if((ASCIIchar >= 65 && ASCIIchar <= 90) )
            {outputArr.push(morseArray[ASCIIchar-65]);
            outputArr.push(" "); }
        else if (ASCIIchar >= 48 && ASCIIchar <= 57) 
            { outputArr.push(morseArray[ASCIIchar-22]); 
              outputArr.push(" ");}

            
        
    }

    let result =  outputArr.join("");

    return result;

}

export const printTranslate = (input) => {

    console.log(input);
    return String(translate(input));

}