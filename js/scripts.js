//Feel free to rename
var button1 = document.getElementById("1997");
var button2 = document.getElementById("2008");
var button3 = document.getElementById("2016");
var button4 = document.getElementById("2020");

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
