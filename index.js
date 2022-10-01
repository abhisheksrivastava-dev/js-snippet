var counter = 10;
document.addEventListener("DOMContentLoaded", function () {
  var list = document.getElementById("list");

  window.addEventListener(
    "scroll",
    debounce((event) => {
      var windowTop = window.scrollY;
      var windowHeight = window.innerHeight;
      var totalScrollHeight = document.documentElement.scrollHeight;
      if (windowTop + windowHeight + 300 > totalScrollHeight) {
        var li = document.createElement("li");
        li.classList.add("listItem");
        li.id = counter;
        li.innerText = `Item ${counter}`;
        counter++;
        list.append(li);
      }
      console.log(
        "windowTop:- ",
        windowTop,
        "windowHeight:- ",
        windowHeight,
        "totalScrollHeight:- ",
        totalScrollHeight,
        "list:- ", 
        list, 
        "li:- ",
        li
      );
    }, 70)
  );
});

function debounce(cb, wait) {
  var timer = null;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb.call(this, ...args);
    }, wait);
  };
}

// event-delegation
document.querySelector('#list').addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        window.location.href = "/" + e.target.id;
    }
})