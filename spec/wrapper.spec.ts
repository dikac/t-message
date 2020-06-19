import Wrapper from "../dist/wrapper";

it("enable console log", () => spyOn(console, 'log').and.callThrough());


describe("constructor", function() {

    let standard = {message:1};
    let wrapped = new Wrapper(standard);

    it(`number`, () => expect(wrapped.message).toBe(1));
});


describe("set", function() {

    let standard = {message:1};
    let wrapped = new Wrapper(standard);


    it(`subject value`, () => {
        standard.message = 10;
        expect(wrapped.message).toBe(10)
    });

    it(`subject`, () => {
        wrapped.subject = {message:20};
        expect(wrapped.message).toBe(20)
    });
});




