import { translate, printTranslate } from "./functions.js";


it("returns correct morse code with spaces", () => {

    let result = printTranslate("a2");

    expect(result).toBe(".- ..--- ");
})


it("returns correct morse code with spaces", () => {

    let result = printTranslate("b0");

    expect(result).toBe("-... ----- ");
})

it("ignores special characters", () => {

    let result = printTranslate("x/_=-=-y");

    expect(result).toBe("-..- -.-- ");
})

