let clickedLamp1 = 0;
let clickedLamp2 = 0;
let clickedLamp3 = 0;


document.querySelector("#lightNum1").addEventListener('click', function(){

  if (clickedLamp1 === 0) {
    document.querySelector("#lightNum1").setAttribute("style", "opacity: 0.5");
    clickedLamp1 = 1;

  } else {
    document.querySelector("#lightNum1").setAttribute("style", "opacity: 1");
    clickedLamp1 = 0;
  }

});

document.querySelector("#lightNum2").addEventListener('click', function(){

  if (clickedLamp2 === 0) {
    document.querySelector("#lightNum2").setAttribute("style", "opacity: 0.5");
    clickedLamp2 = 1;

  } else {
    document.querySelector("#lightNum2").setAttribute("style", "opacity: 1");
    clickedLamp2 = 0;
  }

});

document.querySelector("#lightNum3").addEventListener('click', function(){

  if (clickedLamp3 === 0) {
    document.querySelector("#lightNum3").setAttribute("style", "opacity: 0.5");
    clickedLamp3 = 1;

  } else {
    document.querySelector("#lightNum3").setAttribute("style", "opacity: 1");
    clickedLamp3 = 0;
  }

});

