// Write your tests here!
const { expect } = require("chai")
const { substitution } =  require("../src/substitution")

describe("substitution() tests written by Thinkful",()=> {
    describe("error handling", ()=>{
        it("should return false if the alphabet is missing",()=>{
            const message = "message"
            const actual = substitution(message);
            expect(actual).to.be.false
        })
        it("should retrun false if the substitution alphabet is not exactly 25 characters",()=>{
            const message = "message"
            const alphabet = "short"
            const actual = substitution(message, alphabet);
            expect(actual).to.be.false
        })
        it("should reeturn false if the substituttion alphabet does not contain unique characters",()=>{
            const message = "message"
            const alphabet = "mnbvcxzlkjhggfdsapoiuytrewq"
            const actual = substitution(message, alphabet);
            expect(actual).to.be.false
        })
    })
    ////////////// ^ Error Handling Test ^ ////////////////////////////////
    /////////// substituttion (input, alphabet, encode = true)
    describe("encoding a message", ()=>{
        it("should encode a message by using the given substitution alphabet",()=>{
            const input = "thinkful"
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const actual = substitution(input, alphabet, true)
            const expected = "jrufscpw"
            expect(actual).to.equal(expected)
        })
        it("should work with any kind of key with unique characters",()=>{
            const input = "message"
            const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
            const actual = substitution(input, alphabet, true)
            const expected = "y&ii$r&"
            expect(actual).to.equal(expected)

        })
        it("should preservce spaces",()=>{
            const input = "You are an excellent spy"
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const actual = substitution(input, alphabet, true)
            const expected = "elp xhm xf mbymwwmfj dne"
            expect(actual).to.equal(expected)

        })
    })
    ///////////// ^ Encoding Test ^ ////////////////////////////////
    describe("decoding a message", ()=>{
        it("should decode a message by using the given substitution alphabet",()=>{
            it("should encode a message by using the given substitution alphabet",()=>{
                const input = "jrufscpw"
                const alphabet = "xoyqmcgrukswaflnthdjpzibev";
                const actual = substitution(input, alphabet, false)
                const expected = "thinkful"
                expect(actual).to.equal(expected)
            })
            it("should work with any kind of key with unique characters",()=>{
                const input = "y8ii$r8"
                const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
                const actual = substitution(input, alphabet, false)
                const expected = "message"
                expect(actual).to.equal(expected)
            })
             it("should preservce spaces",()=>{
                const input = "elp xhm xf mbymwwmfj dne"
                const alphabet = "xoyqmcgrukswaflnthdjpzibev";
                const actual = substitution(input, alphabet, false)
                const expected = "You are an excellent spy"
                expect(actual).to.equal(expected)
            })
    })
})
})
