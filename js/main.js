window.Exhausted = (function() {

  function Exhausted() {

  }

  Exhausted.prototype = {

    //----

    squared: function(num) {
      return Math.pow(num, 2);
    },

    //----

    sayGoodnight: function(name) {
      return "Goodnight " + name;
    },


    //----
    
    reverseMe: function(str) {
      return str.split("").reverse().join("");
    },


    //----

   add5: function(num) {
      return num + 5;
    },

    //----
    
    add50: function(num){
      return num += 50;
    },


    //----

    multiplyby10: function(num){
      return num *= 10;
    },


    //----

    

    //----

  };

  return Exhausted;

})();
