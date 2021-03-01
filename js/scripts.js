let clickNum = 0

function countUp(num, val) {
  let iter = 0;
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
