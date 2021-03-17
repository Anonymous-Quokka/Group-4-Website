const srcs = ["img/saola.png", "img/paleSaola.png", "img/redSaola.png"];

let DATA = sendHTTPSRequest("saola");
let i = 0;
let nums = [];
for (var item in DATA) {
  $("button#button" + ++i).html(item);
  nums.push(DATA[item]);
}

$("#button1").click(function() {
  createAnimals(srcs, nums[0] );
});

$("#button2").click(function() {
  createAnimals(srcs, nums[1] );
});

$("#button3").click(function() {
  createAnimals(srcs, nums[2] );
});

$("#button4").click(function() {
  createAnimals(srcs, nums[3] );
});

createAnimals( srcs, nums[0] );
