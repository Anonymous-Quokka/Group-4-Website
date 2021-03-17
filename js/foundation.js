let url = "https://www.jasonclxr.xyz/classes/art101/species?type="
let proxy = "https://cors-anywhere.herokuapp.com/"
let holder = $("#HOLDER");
let od = new Odometer({el: document.querySelector('#counter_bubble'), value: 0,
  format: '', theme: 'default' });

function getRandomInt(min, max) {
  return Math.floor(min + Math.random() * Math.floor(max - min) + 0.5);
}

function deg(v) { return v * (Math.PI / 180); }

function deg(v) { return v * (Math.PI / 180); }

function createNewAnimal(IMAGES, iter) {
  let angle = deg(getRandomInt(0, 360));
  let dist = getRandomInt(15, 35);

 function createOrangutan(IMAGES, num) {
  od.update( num );
  holder.empty();
  for (let i = 0; i <= num/3000; ++i) {
    createNewAnimal(IMAGES, i);
  }
}
  
  let Xs = getRandomInt(10, 15);
  let Ys = Xs* 1.1;

  let X = (dist * Math.cos(angle) - Xs/2) * 1.2;
  let Y = (dist * Math.sin(angle) - Ys/2) * 1;

  let object = $("<img src = '" + IMAGES[iter % IMAGES.length] + "'>");
  object.css("position", "absolute");
  object.css("width", Xs  + "%");
  object.css("height", Ys  + "%");
  object.css("top",  55 + Y + "%");
  object.css("left",  50 + X + "%");
  object.css("transform", "rotate(" + getRandomInt(-90, 90) + ")");
  object.css("transform", "scaleX(" + Math.pow(-1, iter) + ")");
  holder.append(object);
}

function createAnimals(IMAGES, num) {
  od.update( num );
  holder.empty();
  for (let i = 0; i <= Math.min(num/10, 300); ++i) {
    createNewAnimal(IMAGES, i);
  }
}

function sendHTTPSRequest(animalType) {
  let RETURN;
  $.ajax({
      url: url + animalType,
      data: {},
      type: "GET",
      async: false,
      dataType : "json",
      success: function(data) { RETURN = data; },
      error: function (jqXHR, textStatus, errorThrown) {
          console.log("FAILURE:", textStatus, errorThrown);
      }
  });
  return RETURN;
}
