// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");


/////error Handling
describe("error handling", ()=>{
    it("should return false if shift is equals to 0", ()=>{ //1
        const output = "zebra magazine";
        const shift = 0;
        const actual = caesar(output, shift);
    expect(actual).to.be.false
});
    it("should return false if shift is greater than 25", ()=>{ //2
        const output = "zebra magazine";
        const shift = 26;
        const actual = caesar(output, shift);
    expect(actual).to.be.false
});
it("should return false if shift is less than -25", ()=>{ //3
    const output = "zebra magazine";
    const shift = -26;
    const actual = caesar(output, shift);
expect(actual).to.be.false
});
});


///// encoding a messgae
describe("encoding a message", ()=>{
    it("should encode a message by shifting the letters", ()=>{ //1
        const output = "zebra";
        const shift = 3;
        const actual = caesar(output, shift);
        const expected = "cheud"
        expect(actual).to.equal(expected)
});
    it("should eave spaces and other symbols as is", ()=>{ //2
        const output = "zebra magazine";
        const shift = 3;
        const actual = caesar(output, shift);
        const expected = "cheud pdjdclqh"
    expect(actual).to.equal(expected)
});
    it("should ignore capital letters", ()=>{ //3
        const output = "Zebra";
        const shift = 3;
        const actual = caesar(output, shift);
        const expected = "cheud"
        expect(actual).to.equal(expected)
});
    it("should appropriately handle letters at the end of the alphabet", ()=>{//4
        const output = "zebra magazine";
        const shift = 3;
        const actual = caesar(output, shift);
        const expected = "cheud pdjdclqh"
    expect(actual).to.equal(expected)
});
    it("should allow for a negatiive shift that will shift to the left", ()=>{ //5
        const output = "phvvdjh";
        const shift = -3;
        const actual = caesar(output, shift);
        const expected = "message"
    expect(actual).to.equal(expected)
});
});


////////decoding a message
describe("decoding a message", ()=>{
    it("should encode a message by shifting the letters in the opposite direction", ()=>{ //1
        const output = "phvvdjh"
        const shift = 3;
        const actual = caesar(output, shift, false);
        const expected = "message"
        expect(actual).to.equal(expected) 
});
    it("should leave spaces and other symbols as is", ()=>{ //2
        const output = "phvvdjh phvvdjh";
        const shift = 3;
        const actual = caesar(output, shift, false);
        const expected = "message message"
    expect(actual).to.equal(expected)
});
    it("should ignore capital letters", ()=>{ //3
        const output = "Phvvdjh";
        const shift = 3;
        const actual = caesar(output, shift, false);
        const expected = "message"
        expect(actual).to.equal(expected)
});
    it("should appropriately handle letters at the end of the alphabet", ()=>{ //4
        const output = "cheud pdjdclqh";
        const shift = 3;
        const actual = caesar(output, shift, false);
        const expected = "zebra magazine"
    expect(actual).to.equal(expected)
});
    it("should allow for a negatiive shift that will shift to the left", ()=>{ //5
        const output = "message";
        const shift = -3;
        const actual = caesar(output, shift, false);
        const expected = "phvvdjh"
    expect(actual).to.equal(expected)
});
});
