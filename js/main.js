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

    sub10: function(num){
      return num -= 10;
    },


    //----

    sortStuff: function(arr){
        return _.sortBy(arr);
      },


    //----

    hasSomething: function(array, value){
        return _.contains(array, value, [0]);
      },

    //----

    divideMe5: function(num) {
      return num /= 5;
    },

    //----

    apologize: function(name) {
      return "I am sorry this is so lame " + name;
    }


  };

  return Exhausted;

})();
