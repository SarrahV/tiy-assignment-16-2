describe("Exhausted", function() { //start
  var exhausted;

  beforeEach(function() {
    exhausted = new Exhausted();
  });

  describe("squared", function() {

    it("multiplies a number by itself", function() {
      expect( exhausted.squared(2) ).eq(4);
    });
  });

  describe("sayGoodnight", function() {

    it("says goodnight to a name", function() {
      expect( exhausted.sayGoodnight("Sarrah") ).eq("Goodnight Sarrah");
    });
  });

  describe("reverseMe", function() {

    it("reverses a string", function() {
      expect( exhausted.reverseMe("Sarrah") ).eq("harraS");
    });
  });
  
  describe("add5", function() {

    it("adds 5 to a number", function() {
      expect( exhausted.add5(5) ).eq(10);
    });
  });

  describe("add50", function() {

    it("is a method", function() {
      expect( typeof exhausted.add50 ).eq("function");
    });

    it("adds 50 to a number", function() {
      expect( exhausted.add50(25) ).eq(75);
    });
  });
  
  describe("sub10", function() {

    it("subtracts 10 from a number", function() {
      expect( exhausted.sub10(100) ).eq(90);
    });
  });

  describe("sortStuff", function() {

    it("creates a sorted array", function() {
      var stuff = ["9","8","6","4","9"];
      var sortedStuff = exhausted.sortStuff(stuff);

      // The values are sorted
      expect(sortedStuff).deep.eq(["4","6","8","9","9"]);

      // return  a copy
      expect(sortedStuff).not.eq(stuff);
    });
  });

   describe("hasSomething", function() {

    it("determines if something is in an array", function() {
      var something = ["yes", "da", "something"];
      var nothing  = ["zip", "zilch", "nada", "nyet", "um...no"];

      expect( exhausted.hasSomething(something, "yes") ).eq( true  );
      expect( exhausted.hasSomething(something, "nada") ).eq( false );

      expect( exhausted.hasSomething(nothing, "something") ).eq( false );
      expect( exhausted.hasSomething(nothing, "zilch") ).eq( true  );
    });

  });

   describe("divideMe5", function() {

    it("divides a number by 5", function() {
      expect( exhausted.divideMe5(10) ).eq(2);
    });
  });

 describe("apologize", function() {

    it("apologizes to a name", function() {
      expect( exhausted.apologize("JD") ).eq("I am sorry this is so lame JD");
    });
  });
  



}); //end 






