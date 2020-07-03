import Memoized from "../dist/memoize";

it("enable console log", () => spyOn(console, 'log').and.callThrough());



let standard = {message:10};
let memoize = new Memoized(standard);


it(`check value`, () =>

    expect(memoize.message).toBe(10)
);

it(`directly change`, () =>{

    try {
        // @ts-expect-error
        memoize.message = 20;
        fail('exception should thrown');

    } catch (e) {

        expect(standard.message).toBe(10)
    }

});

it(`change subject value`, () =>{

    standard.message = 20;
    expect(standard.message).toBe(20)
});

it(`recheck memoized value`, () => {

    expect(memoize.message).toBe(10)
});

it(`reset memoize`, () =>{

    memoize.memoize.clear();
    expect(memoize.message).toBe(20)
});

