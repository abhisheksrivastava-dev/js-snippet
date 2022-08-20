<!-- Interview Question https://leetcode.com/discuss/interview-question?currentPage=5&orderBy=most_relevant&query=Amazon%20Frontend%20Engineer -->

<!-- https://bigfrontend.dev/ -->

What is difference between the block and inline elements?
What is difference between Reflow and Repaint?
How can you add a span element inside a div element using web APIs ?
What are CSS preprocessors SASS/LESS used for?
How event loop handles micro and macro tasks?
What is the difference between Unit testing and Integration testing?
How do you identify memory leaks in browser? (Interviewer told me that is an Open ended question)
Final Question was how will you find all the prime numbers up to n? Optimize the prime number?

closures, promises, prototypal inheritance

\*z-index, stacking context, positions, box-model

Oops Questions : difference between classes and object, interface, overloading and overriding

Define one sorting algorithms.

difference between array , set and map
difference between map and hashmap
polyfills
what is typescript and how you get error in typescript

3 Technical question
Find missing number in array
Find missing number in duplicate elements of array
Create api , where you need to add , get and return maximum number from array
and needs to delete the last number

<!-- -------------------------------------------------------------------------------------------------- -->

fundamental javascript - scopes, closures, this keyword, prototypal inheritance, call, apply, bind.
Also prepare building components with pure javascript -

modal
tabs
star rating
accordian
Carousal
autocomplete
data table with sorting/filtering
select

<!-- https://leetcode.com/discuss/interview-question/742791/front-end-interview-questions/631397 -->

Front End White Board

Star Rating

Design Pop Over

Design Accordion (Amazon onsite)

Design Carousel

Design grid using HTML/CSS and Javascript with search and sort, event bubbling (Amazon onsite)

Design NavBar

Infinite Scroll

Typeahead / autocomplete using trie

Implement Debounce function

Implement tic tac toe

Make snake ladder board

Make calendar of any Month like Date Picker

Implement throttle function

Implement custom Higher Order Functions like Map, Reduce, Filter, Sort (Amazon Phone Interview)

Create an analog clock

Make a todo list

Create functionality to change all text on page to different translations

Build a calculator (add/subtract... then multiply/divide... then log/pow... etc)

Search and display Giphy images (through Giphy api) in responsive format

Build Connect Four

Implement Nested Checkboxes (parent is checked, children are checked and vice versa. Must use actual checkbox input)

Implement a poll widget

Implement Event Emitter

Implement promise.all function

Flatten nested Javascript Array without using Array.prototype.flat()

Implement Sort() function.

Useful resources:
WCAG : https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g

for more questions please visit : https://bigfrontend.dev/
https://leetcode.com/discuss/interview-question/1074798/Frontend-Interview-Preparation-(1-4-years)-Level-1-and-Level-2

<!-- ----------------------------------------------------------------------------------------------------- -->

Question 1:

Event bubbling
Prototype vs. class
Accessibility
Callback vs. promise

Question 2:

let Foo = function(a) {
function bar() {
return a;
}
this.baz = function() {
return a;
};
};
Foo.prototype = {
biz: function(a) {
return a;
}
};

let f = new Foo(7);
// what will be the output?
f.bar(); ans:- <!-- Error as bar is internal function only called in Foo. -->
f.baz(); ans:- <!-- 7 -->
f.biz(); ans:- <!-- undefined because their is no reference for a in biz function. -->
Follow-up
How to make the first and third also return 7?

Sol:-

<!-- let Foo = function(a) {
  this.a = a;
  this.bar = function bar() {
      return a;
  }
  this.baz = function() {
      return a;
  };
};
Foo.prototype = {
  biz: function() {
      return this.a;
  }
};

let f = new Foo(7);
what will be the output?
console.log(f.bar());
console.log(f.baz());
console.log(f.biz()); -->

Question 3:

// Implement Fibonacci

function memoize(fn) {
// todo
}

function fib(n) {
// fibonacci
return n;
}

fib(n);

let memoizedFib = memoize(fib);
memoizedFib(n);

Sol :-

<!-- function memoize(fn) {
  return function (n) {
    this.memo = this.memo || {};
    if (typeof this.memo[n] == "undefined") {
      this.memo[n] = fn.apply(this, [n]);
    }
    return this.memo[n];
  };
}

function fib(n) {
  if (n <= 0) return 0;
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

fib(8);

let memoizedFib = memoize(fib);
console.log(memoizedFib(8));

console.log(memoizedFib(8)); -->

Question 4:

// Implement Infinite Scroll

<!-- 
 * API Docs
 * ---------
 * /posts?page=0 => [{id: 1, title: "Post 1"}, {id: 2, title: "Post 2"}, {id: 3, title: "Post 3"}, N...]
 * /posts?page=1 => [{id: 4, title: "Post 4"}, {id: 5, title: "Post 5"}, {id: 6, title: "Post 6"}, N...]
 * /posts?page=N => [N...]
 */
-->
// HTML
// ---------
<ul id="posts"></ul>

// JS
// ---------
$(window).on("scroll", scrollHandler);


function scrollHandler() {
  // todo
}

Sol:- https://codepen.io/kalpanagupta/pen/PoKzwaP, https://github.com/abhisheksrivastava-dev/js-snippet/tree/infinite-scroll


% ------------------------------------------------------------------------- %

If you were to design a web app that uses flash cards to help people learn a foreign language. The flashcard front side shows a word in the first language of the user, and when being hovered/clicked on, the flash card will flip and show the word in a foreign language. How would you go about designing this? Please talk from 3 aspects: server-client communication(including APIs), UI/UX design, optimization for performance.