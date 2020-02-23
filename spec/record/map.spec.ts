import Map from "../../dist/record/map";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

class C {
    constructor(
        public message : string
    ){}
}

let record = {

    message1 : new C('m1'),
    message2 : {
        message1 : new C('m2'),
        message2 : new C('m3'),
    },
    message3 : new C('m4'),
};

describe("check property", function() {

    let result = Map(record, (v:any) : v is string => typeof v === "string");

    it("message1", () => {

        if(result.message1) {

            expect(result.message1).toBe('m1');

        } else {

            fail('property is not exits')
        }
    });

    describe("message2", () => {

        it("message2", () => {

            if(result.message1) {

                expect(result.message2.message1).toBe('m2');

            } else {

                fail('property is not exits')
            }
        });

        it("message3", () => {

            if(result.message2) {

                expect(result.message2.message2).toBe('m3');

            } else {

                fail('property is not exits')
            }
        });
    });


    it("message3", () => {

        if(result.message3) {

            expect(result.message3).toBe('m4');

        } else {

            fail('property is not exits')
        }
    });


});

