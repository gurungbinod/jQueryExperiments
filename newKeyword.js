var Foo = function(){
  this.A = 1;
  this.B = 2;
};

//Calling
Foo()
// creates variable A and B in global context

// but with new keyword
var obj = new Foo();
// variables are within the scope of obj 