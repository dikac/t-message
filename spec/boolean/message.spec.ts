import Type from "../../dist/boolean/message";
import ObjectType from "@dikac/t-object/boolean/object";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});



describe("unvalidated value", function() {

    describe("valid", function() {

        it("string", () => {

            let message = {message : 'string'};
            expect(Type(message)).toBe(true)

        });

        it("integer", () => {

            let message = {message : 1};
            expect(Type(message)).toBe(true)

        });
    });

    describe("invalid", function() {

        it("string", () => {

            let message = 'string';
            expect(Type(message)).toBe(false)

        });

        it("integer", () => {

            let message = 1;
            expect(Type(message)).toBe(false)

        });
    });
})


describe("validated value", function() {

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

    describe("invalid value", function() {

        it("object", () => {

            let message = {message :1};
            expect(Type(message, ObjectType)).toBe(false)
        });

        it("class", () => {

            class C {
                constructor(
                    public message : number = 1
                ){}
            }

            expect(Type(new C, ObjectType)).toBe(false)
        });
    });

    describe("invalid message", function() {

        it("object", () => {

            let message = {};
            expect(Type(message, ObjectType)).toBe(false)
        });

        it("class", () => {

            class C {
                constructor(
                    public string : string = '1'
                ){}
            }

            expect(Type(new C, ObjectType)).toBe(false)
        });
    });
})
