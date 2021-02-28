//Feel free to rename
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");

// Create an event listener attached to buttons
button1.addEventListener("click", function() {
  document.getElementById("counter_bubble").innerHTML = "<h1>567</h1>";
})
button2.addEventListener("click", function() {
  document.getElementById("counter_bubble").innerHTML = "<h1>245</h1>";
})
button3.addEventListener("click", function() {
  document.getElementById("counter_bubble").innerHTML = "<h1>30</h1>";
})
button4.addEventListener("click", function() {
  document.getElementById("counter_bubble").innerHTML = "<h1>~10</h1>";
})
