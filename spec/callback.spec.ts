import Callback from "../dist/callback";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("test value", function() {

    let standard = new Callback((message:string) => message, ['message']);

    it("check message value", () => {
        expect(standard.message).toBe('message')
    });

});
