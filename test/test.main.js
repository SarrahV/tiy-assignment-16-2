describe("Exhausted", function() { //start
  var exhausted;

  beforeEach(function() {
    exhausted = new Exhausted();
  });

  describe("squared", function() {

    it("multiplies a number by itself", function() {
      expect( exhausted.squared(4) ).eq(16);
    });
  });

  



}); //end 






