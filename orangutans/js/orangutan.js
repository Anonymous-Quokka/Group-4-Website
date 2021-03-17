const srcs = ["img/orangutan-dark.png", "img/orangutan-light.png", "img/orangutan.png"];

let DATA = sendHTTPSRequest("orangutan");
let i = 0;
let nums = [];
for (var item in DATA) {
  $("button#button" + ++i).html(item);
  nums.push(DATA[item]);
}


$("#button1").click(function() {
  createOrangutan(srcs, nums[0] );
});

$("#button2").click(function() {
  createOrangutan(srcs, nums[1] );
});

$("#button3").click(function() {
  createOrangutan(srcs, nums[2] );
});

$("#button4").click(function() {
  createOrangutan(srcs, nums[3] );
});

createOrangutan( srcs, nums[0] );
