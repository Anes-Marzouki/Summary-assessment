// Remember to relax and ask for help when you need it (only from staff)
// YOU CAN ONLY USE MDN AS A RESOURCE for JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
// you can use W3 school for HTML-CSS
// for the jquery you can only use jquery documentaion.
// https://api.jquery.com
// NOTE: you are accountable for your styling, so make sure your styling is good.
// ANOTHER NOTE:leave comments about your intent or pseudo-code describing your plan.

// Use the following helper functions in your solution

function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function(element, i) {
      if (predicate(element, i)) {
        acc.push(element);
      }
    });
    return acc;
  }
  
  function map(array, func) {
    var acc = [];
    each(array, function(element, i) {
      acc.push(func(element, i));
    });
    return acc;
  }
  
  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function(element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }
  
  //=============================================================================
  /*                              Q1                                           */
  //=============================================================================
  //write a function that takes a string as an input and returns an array
  //containing the length of each word in that string.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  //wordLengths("hello its me") // [5,3,2]
  
  function wordLengths(str) {
      array = str.split(' '); //turns the string into an array.
      return map(array, function(element, i) { //return the element.length.
         return element.length; 
      })
  }
  
  //=============================================================================
  /*                                  Q2                                    */
  //=============================================================================
  //Write a function countOccurrences that accepts two parameters: a string, 
  // and a character (e.g. "a"), and returns number of times that character occured.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  // countOccurrences("hello", "l"); // 2
  // countOccurrences("hello, world!", "l"); // 3
  
// var count = 0;
// if (array[i] === character) ====> count++;
//uses each.

  function countOccurrences(string, character) {
      var array = string.split ('');
      var c = 0;
      for (i = 0; i < array.length; i++) {
          if (array[i] == character) {
              c += 1;
          }
      }
      return c;
  }
  
  //=============================================================================
  /*                                  Q3                                    */
  //=============================================================================
  //write a function that takes a string as an input and returns an array
  //with only the words of length that are longer than 3.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  // wordsLongerThanThree("Hello Mad World") //["Hello", "World"]
  
  //uses filter; filter the array for length gt 3
  function wordsLongerThanThree(str) {
      var array = str.split(' ');
      return filter(array, function(word) {
          return word.length > 3;
      })
  }
  //=============================================================================
  /*                                  Q4                                        */
  //=============================================================================
  //Using recursion, write a function called repeatString that takes two parameters: a string str, 
  //which is the string to be repeated, and count, a number 
  //representing how many times the string str should be repeated.
  //repeatString('dog', 0); // => '' 
  //repeatString('dog', 1); // => 'dog' 
  //repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog' 
  //repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'
  
  function repeatString(str, count) { 
   // TODO: your code here 
  } 
   
  
  //=============================================================================
  /*                                  Q5                                       */
  //=============================================================================
  /*
   using closures create a function called makePizza that has the following properties and methods
   crust a property represented by a string. ex "thin","thick". 
   size a property represented by a string. ex "M","L".
   numberOfSlice a property that hold the number of slice, ex: 8
   ** the values of all properties will be provided as arguments in the function invocation. 
   addIngredients a function that add a new ingredient to the ingredients property.
   displayIngredients a function that displays a comma separated string of all ingredients. ex: The ingredients are:tomato,mushroom,meat
   bakePizza a function that display a string with your pizza description after 2 seconds. ex "Your thin M 8 slice pizza is done" 
   eatSlice a function that let you eat from the pizza as long as the numberOfSlice is greater than zero and decrease the total number of slices by one.
   */
  //Example:
  // var pizza = makePizza("thin", "M", 2);
  // pizza.addIngredients("tomato");
  // pizza.addIngredients("meshroom");
  // pizza.addIngredients("meat");
  // console.log(pizza.displayIngredaints());
  // pizza.bakePizza();
  // pizza.eatSlice();
  // pizza.eatSlice();
  // pizza.eatSlice();
  
  var makePizza = function (crust, size, numberOfSlice) {
      var obj = {};
      //properties
      obj.crust = crust;
      obj.size = size;
      obj.numberOfSlice = numberOfSlice;
      obj.ingredients = [];

      //Methods
      obj.addIngredients = addIngredients;
      obj.displayIngredients = displayIngredients;
      obj.bakePizza = bakePizza;
      obj.eatSlice = eatSlice;
      return obj;
  }


var addIngredients = function(ingredient) { //pushes the string to the array of ingredients.
    this.ingredients.push(ingredient);
}

var displayIngredients = function() { //returns the ingredients fromt the array seperated by ','.
    console.log('The ingredients are: ' + this.ingredients.join(','))
}

var bakePizza = function() {
   setTimeout(console.log('Your ' + this.crust + ' ' + this.size) + ' ' + this.slice + ' pizaa is done', 2*1000);
}

var eatSlice = function() {
    if (this.numberOfSlice > 0) {
        this.numberOfSlice--;
    }else {
        console.log("There're no more slices left!")
    }
}

  //=============================================================================
  /*                                  Q6                                      */
  //=============================================================================
  /*
  Create a ReadingList class by using OOP concept, where:
  Your class should has:
  "read" for the number of books that finish reading
  "unRead" for the number of books that still not read
  "toRead" array for the books names that want to read in the future
  "currentRead" for the name of the book that is reading currently
  "readBooks" Array of the names of books that finish read
  "AddBook" function that:
  a- Accept the book name as parameter
  b- Add the new book to "toRead" array
  c- Increment the number of the unread books.
  "finishCurrentBook" function that:
  a- Add the "currentRead" to the "readBooks" array
  b- Increment the "read" books
  c- Change the "currentRead" to be the first book from "toRead" array
  d- Decrement the number of "unread" books
  */
  
  // Now, to make sure that you are actually reading, make a comment below this and type: Yes I am
  //Yes I am !
  
var ReadingList = function () {
      var obj = {};
      obj.read ; //numb
      obj.unRead; //numb
      obj.toRead = [];
      obj.currentRead = ''; //string
      obj.readBooks = [];
      obj.AddBook = AddBook; //method
      obj.finishCurrentBook = finishCurrentBook; //method
      return obj;
}
  
var AddBook = function(name){
    this.toRead.push(name);
    this.unRead++;
}

var finishCurrentBook = function () {
    this.readBooks.push(this.currentRead);
    this.read++;
    this.currentRead = this.toRead[0];
    this.unRead--;
}

  
  //=============================================================================
  /*                                  Q7                                       */
  //=============================================================================
  //Using closures create makeSafe Function that accepts an initial integer value to specify the storage size limit
  //makeSafe should contain addItem function that accepts two parameters the item and the itemSize as Strings
  //itemSize should be either "big", "medium" and "small"
  //big sized items will hold 3 slots in the storage
  //medium sized items will hold 2 slots in the storage
  //small sized items  will hold 1 slot in the storage
  //return "Can't fit" if you try to add an item that exceeds the storage size limit
  //when the safe is full return a string representing all the items that are in the safe
  //Example:
  //  var safe = makeSafe(5)
  //  safe('watch','small')
  //  safe('gold-bar','big')
  //  safe('silver-bar','big') => "Can't fit"
  //  safe('money','small') => "watch gold-bar money"
  
  // Write your code here .....

var makeSafe = function (init) {
    var storageLimit = init;
    var items = [];
    return function addItem(item, itemSize) {
        if (itemSize === "big" || itemSize === "medium" || itemSize === "small") { //simple check for sizes.
            if (storageLimit === 0) {
                return items.join(' ');
            }

            if (itemSize === "big") {
                if (storageLimit >= 3) {
                    storageLimit-= 3;
                }else {
                    return "Can't fit";
                }
            }
            else if (itemSize === "medium") {
                if (storageLimit >= 2) {
                    storageLimit-= 2;
                }else {
                    return "Can't fit";
                }
            }
            else  {
                if (storageLimit >= 1) {
                    storageLimit-= 1;
                }else {
                    return "Can't fit";
                }
            }
            items.push(item);
        }else {
            return 'Not the right size';
            }
    }

}
  
  //=============================================================================
  /*                                  Q8                                       */
  //=============================================================================
  
  //Create HTML, CSS & JS files and connect them together
  //Add Two text input fields, one with a placeholder input, and another with color
  //Add a button below them and an empty unordered list below the button
  //Create 3 CSS classes (red, yellow, blue)
  //Create a javascript function that adds an item list to the unordered list
  //If the color value is red, yellow or blue
  //Add the CSS class to the item accordingly
  //Do not add a list item if the color value is non of the colors
  
  //DO NOT USE JQUERY
  
  //================================================================================
  /*                              Q9                                            */
  //================================================================================
  
  //Create HTML, CSS & JS files
  //Link jQuery
  //Create an empty unordered list
  //Create three input elements of type checkbox
  //Create two buttons "create" & "remove"
  //Create 7 classes in CSS each with the appropriete color (black, purple, green, orange, red, yellow, blue)
  //Using jQuery run a function that gets called using the button's id (#create)
  //The function takes see if the checkboxes are checked or not (true or false), use $("#id").prop('checked')
  //If all 3 checkboxes are checked add an list item with the word black in it and add the "black" class to it
  //If 2 of the checkboxes are checked add (purple = blue + red), (green = blue + yellow), (orange = red + yellow)
  //If 1 of the checkboxes is checked add (yellow, blue or red) as li and the class to it
  
  //Using jQuery call a function from the button's id (#delete)
  //The function removes all the elements from the unordered list based on the checkboxes as the previous function
  //Use jQuery as much as you can in selecting elements and other tasks
  
  //================================================================================
  /*                              Q10                                           */
  //================================================================================
  // Theoretical questions.
  // 1- In your own words,Why do we use Closures ?
	We use Closure to protect a variable from unwanted modifications or access.
  
  // 2- In OOP, what does "this" refer to ?
  	"this" refers to whatever is at it left, generally it refers to the element that's inside the object where this
	is invoked.
  // 3- What is jQuery?
  	it's a js library that helps you write less code
  // 4- what is the diffrence between Closure's methods and The OOP's methods?
	OOp methods are a callback function as properties inside an object, 
	closure's methods are
  