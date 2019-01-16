let clicked = 0;
let lamp1 = document.querySelector('#lightNum1');
let lamp2 = document.querySelector('#lightNum2');
let lamp3 = document.querySelector('#lightNum3');

document.querySelector("#lightNum1").addEventListener('click', function(){

  if (clicked === 0) {
    document.querySelector("#lightNum1").setAttribute("style", "opacity: 0.5");
    clicked = 1;

  } else {
    document.querySelector("#lightNum1").setAttribute("style", "opacity: 1");
    clicked = 0;
  }

});

document.querySelector("#lightNum2").addEventListener('click', function(){

  if (clicked === 0) {
    document.querySelector("#lightNum2").setAttribute("style", "opacity: 0.5");
    clicked = 1;

  } else {
    document.querySelector("#lightNum2").setAttribute("style", "opacity: 1");
    clicked = 0;
  }

});

document.querySelector("#lightNum3").addEventListener('click', function(){

  if (clicked === 0) {
    document.querySelector("#lightNum3").setAttribute("style", "opacity: 0.5");
    clicked = 1;

  } else {
    document.querySelector("#lightNum3").setAttribute("style", "opacity: 1");
    clicked = 0;
  }

});

