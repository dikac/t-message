import Sentence from "../dist/sentence";

it("enable console log", () => spyOn(console, 'log').and.callThrough());

let sentence = new Sentence(true, 'value', {invalid:'is not', valid:'is'}, 'valid');

it(`true`, () => {
    expect(sentence.message).toBe('value is valid')
});

it(`false`, () => {
    sentence.valid = false;
    expect(sentence.message).toBe('value is not valid')
});

it(`true`, () => {
    sentence.valid = true;
    expect(sentence.message).toBe('value is valid')
});

it(`false`, () => {
    sentence.valid = false;
    expect(sentence.message).toBe('value is not valid')
});
