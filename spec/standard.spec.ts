import Standard from "../dist/standard";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("test value", function() {

    let standard = new Standard('message');

    it("check message value", () => {
        expect(standard.message).toBe('message')
    });

});
