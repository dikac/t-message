import Message from "../../../dist/assert/string/message";


it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it('true valid', ()=>{

    expect(Message(true, {message:1}, 'value')).toBe(
        'value "Object" is compatible with Message type.'
    );

});

it('true invalid', ()=>{

    expect(Message(true, {}, 'value')).toBe(
        'value "Object" is compatible with Message type.'
    );

});

it('false valid', ()=>{

    expect(Message(false, {message:1}, 'value')).toBe(
        'value "Object" is not compatible with Message type.'
    );

});

it('false invalid', ()=>{

    expect(Message(false, {}, 'value')).toBe(
        'value "Object" is not compatible with Message type.'
    );

});



it('true invalid CLass', ()=>{

    expect(Message(true, new Set(), 'argument')).toBe(
        'argument "Set" is compatible with Message type.'
    );

});

it('false valid CLass', ()=>{

    expect(Message(false, new Set(), 'argument')).toBe(
        'argument "Set" is not compatible with Message type.'
    );

})
