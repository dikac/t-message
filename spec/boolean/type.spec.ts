import Type from "../../dist/boolean/type";
import ObjectType from "@dikac/t-object/boolean/type";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("valid", function() {

    it("object", () => {

        let message = {message :{}};
        expect(Type(message, ObjectType)).toBe(true)
    });

    it("class", () => {

        class C {
            constructor(
                public message : object = {}
            ){}
        }

        expect(Type(new C, ObjectType)).toBe(true)
    });

});

describe("invalid", function() {

    it("expect object, given string", () => {

        let message = {message : 'string'};
        expect(Type(message, ObjectType)).toBe(false)

    });

    it("expect object, given integer", () => {

        let message = {message : 1};
        expect(Type(message, ObjectType)).toBe(false)

    });

});
