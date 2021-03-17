const srcs = ["img/vaquita-purple.png", "img/vaquita-blue.png", "img/vaquita-green.png"];
var w = window.innerWidth;
var h = window.innerHeight;
let holder = $("#vaquitas");

od = new Odometer({el: document.querySelector('#counter_bubble'), value: 0,
  format: '', theme: 'default' });

function getRandomInt(min, max) {
  return Math.floor(min + Math.random() * Math.floor(max - min) + 0.5);
}

function deg(v) { return v * (Math.PI / 180); }

function createNewAnimal(IMAGES, iter) {
  w = window.innerWidth;
  h = window.innerHeight;
  let pX = [getRandomInt(0, 0.4*w), getRandomInt(0.6*w, w)];
  let x = pX[getRandomInt(0, 1)];
  let pY = [getRandomInt(0, 0.4*h), getRandomInt(0.6*h, h)];
  let y = pX[getRandomInt(0, 1)];

  let angle = deg(getRandomInt(0, 360));
  let dist = getRandomInt(15, 35);

  let Xs = getRandomInt(10, 15);
  let Ys = Xs* 1.1;

  let X = (dist * Math.cos(angle) - Xs/2) * 1.2;
  let Y = (dist * Math.sin(angle) - Ys/2) * 1;


  let object = $("<img src = '" + IMAGES[iter % 3] + "'>");
  object.css("position", "absolute");
  object.css("width", Xs  + "%");
  object.css("height", Ys  + "%");
  object.css("top",  55 + Y + "%");
  object.css("left",  50 + X + "%");
  object.css("transform", "rotate(" + getRandomInt(-90, 90) + ")");
  object.css("transform", "scaleX(" + Math.pow(-1, iter) + ")");
  holder.append(object);
}

function createAnimals(num) {
  holder.empty();
  for (let i = 0; i <= num/10; ++i) {
    createNewAnimal(srcs, i);
  }
}

// Create an event listener attached to buttons
$("#button1").click(function() {
  createAnimals(567);
  od.update(567);
});

$("#button2").click(function() {
  createAnimals(245);
  od.update(245);
});

$("#button3").click(function() {
  createAnimals(30);
  od.update(30);
});

$("#button4").click(function() {
  createAnimals(10);
  od.update(10);
});
