let clickNum = 0
const srcs = ["img/vaquita-purple.png", "img/vaquita-blue.png", "img/vaquita-green.png"];
var w = window.innerWidth;
var h = window.innerHeight;
let holder = $("#vaquitas");


function getRandomInt(min, max) {
  return Math.floor(min + Math.random() * Math.floor(max - min));
}

function createNewVaquita(iter) {
  w = window.innerWidth;
  h = window.innerHeight;

  let object = $("<img src = '" + srcs[iter % 3] + "'>");
  object.css("position", "absolute");
  object.css("width",  getRandomInt(100, 200) + "px");
  object.css("top",  getRandomInt(h/4, 3*h/4) + "px");
  object.css("left",  getRandomInt(0, 9*w/10) + "px");
  object.css("transform", "rotate(" + getRandomInt(-90, 90) + ")");
  object.css("transform", "scaleX(" + Math.pow(-1, iter) + ")");
  holder.append(object);
}

function countUp(num, val) {
  let iter = 0;
  holder.empty();
  for (let i = 0; i <= num; i += num/100) {
    setTimeout(function() {
      if (clickNum == val) {
        $("#counter_bubble").html("<h1>" + Math.floor(i) + "<h1>");
      }
    }, iter*10);
    iter += 1;
  }
  setTimeout(function() {
    if (clickNum == val) {
      $("#counter_bubble").html("<h1>" + Math.floor(num) + "<h1>");
    }
  }, 1000);

  for (let i = 0; i <= num/10; ++i) {
    createNewVaquita(i);
  }

}
countUp(100);

// Create an event listener attached to buttons
$("#button1").click(function() {
  countUp(567, ++clickNum);
});

$("#button2").click(function() {
  countUp(245, ++clickNum);
});

$("#button3").click(function() {
  countUp(30, ++clickNum);
});

$("#button4").click(function() {
  countUp(10, ++clickNum);
});
