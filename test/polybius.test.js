// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() submission tests written by Thinkful", ()=>{
describe("encoding a message", ()=>{
    it("should encode a message by translating each letter to number pairs ",()=>{
        const input = "message"
        const actual = polybius(input)
        const expected = "23513434112251"
expect(actual).to.equal(expected)
    });
    it("should translate both 'i'and 'j' to 42 ",()=>{
        const input = "messagi"
        const actual = polybius(input)
        const expected = "23513434112242"
expect(actual).to.equal(expected)
    });
    it("should leaves spaces as is ",()=>{
        const input = "message message"
        const actual = polybius(input)
        const expected = "23513434112251 23513434112251"
expect(actual).to.equal(expected)
    });
});
////////// ^Encoding tests ^////////////

describe("decoding a message", ()=>{
    it("should encode a message by translating each pair of numbers to letters ",()=>{
        const message = "23513434112251"
        const actual = polybius(message, false)
        const expected = "message"
expect(actual).to.equal(expected)
    });
    it("should translate both to 42'i'and 'j' ",()=>{
        const message = "424222221351"
        const actual = polybius(message, false)

 expect(actual).to.include("i");
 expect(actual).to.include("j");
    });
    it("should leaves spaces as is ",()=>{
        const message = "23513434112251 23513434112251"
        const actual = polybius(message, false)
        const expected = "message message"
expect(actual).to.equal(expected)
    });
    it("should return false if all numbers is odd",()=>{
        const message = "235134341122429"
        const actual = polybius(message, false)
expect(actual).to.be.false
    });
    });
});
