import Type from "../../dist/boolean/message";
import ObjectType from "@dikac/t-object/boolean/object";


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

describe("invalid validated", function() {

    it("expect object, given string", () => {

        let message = {message : 'string'};
        expect(Type(message, ObjectType)).toBe(false)

    });

    it("expect object, given integer", () => {

        let message = {message : 1};
        expect(Type(message, ObjectType)).toBe(false)

    });

});

describe("invalid data", function() {

    it("expect object, given string", () => {

        let message = {};
        expect(Type(message)).toBe(false)

    });

    it("expect object, given integer", () => {

        let message = 1;
        expect(Type(message)).toBe(false)

    });

});
