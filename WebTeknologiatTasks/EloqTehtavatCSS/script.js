//1
/*window.addEventListener("click", () => {
    console.log("Sup");
});*/

//2Press button
let button1 = document.querySelector("#button1");
button1.addEventListener("click", () => {
  console.log("Wadap Button1");
});

//3 Press once
let button2 = document.querySelector("#button2");

function oneTrick() {
  console.log("One trick did it's thing");
  button2.removeEventListener("click" , oneTrick);
  button2.style.backgroundColor = "red";
}

button2.addEventListener("click", oneTrick);

//4 MouseClick
let button3 = document.querySelector("#button3");
let mouseAppend = document.querySelector("#mouseText");

button3.addEventListener("mousedown", event => {
  if (event.button === 0) {
    mouseAppend.innerHTML += "Left ";
  } else if (event.button === 1) {
    mouseAppend.innerHTML += "Right ";
  } else if (event.button) {
    mouseAppend.innerHTML += "Middle "
  }
});

//5 Removes propagation
let paragraphClick = document.querySelector("#pId1");
let button4 = document.querySelector("#button4");

paragraphClick.addEventListener("mousedown", () => {
  console.log("Handler for paragraph.");
});

button4.addEventListener("mousedown", event => {
  console.log("Handler for button.");
  if (event.button === 3) event.stopPropagation();
});

//6 Prevent default
let fakeLink = document.querySelector("#link1");
let linkAppend = document.querySelector("#linkText");

fakeLink.addEventListener("click", (event) => {
  linkAppend.innerHTML += "Pranked ";
  event.preventDefault(event);
});

//7 Key events
window.addEventListener("keydown", event => {
  if (event.key === "v") {
    document.querySelector("#pId2").innerHTML = "Pew";
    document.querySelector("#pId2").style.backgroundColor = "red"
  }
});

window.addEventListener("keyup", event => {
  if (event.key === "v") {
    document.querySelector("#pId2").innerHTML = "";
  }
});

window.addEventListener("keydown", event => {
  if (event.key === "v" && event.ctrlKey) {
    document.querySelector("#pId2").innerHTML = "Pew Pew Pew Pew Pew Pew Pew Pew Pew Pew Pew Pew";
    document.querySelector("#pId2").style.backgroundColor = "red"
  }
});


//8 Mouse clicks
let mouseWindow = false;
const drawDiv = document.querySelector("#drawDiv");

drawDiv.onmouseover = function () {
  mouseWindow = true;
  console.log("hiiri on päällä")
};

drawDiv.onmouseout = function () {
  mouseWindow = false;
  console.log("OUT")
};

if (mouseWindow = true) {
  drawDiv.addEventListener("click", event => {
    let dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    document.body.appendChild(dot);
  });
}

//9 Mouse motion

let lastX; // Tracks the last observed mouse X position
let bar = document.querySelector("#barDiv");
bar.addEventListener("mousedown", event => {
  if (event.button === 0) {
    lastX = event.clientX;
    window.addEventListener("mousemove", moved);
    event.preventDefault(); // Prevent selection
    console.log("DRAG")
  }
});

function moved(event) {
  if (event.buttons === 0) {
    window.removeEventListener("mousemove", moved);
    console.log("DRAG")

  } else {
    let dist = event.clientX - lastX;
    let newWidth = Math.max(10, bar.offsetWidth + dist);
    bar.style.width = newWidth + "px";
    lastX = event.clientX;
  }
}


//10 Touch events

/*function update(event) {
  for (let dot; dot = document.querySelector("dot2");) {
    dot.remove();
  }
  for (let i = 0; i < event.touches.length; i++) {
    let {pageX, pageY} = event.touches[i];
    let dot = document.createElement("dot");
    dot.style.left = (pageX - 50) + "px";
    dot.style.top = (pageY - 50) + "px";
    document.body.appendChild(dot);
  }
}
window.addEventListener("touchstart", update);
window.addEventListener("touchmove", update);
window.addEventListener("touchend", update);*/

//11 Scroll event
document.body.appendChild(document.createTextNode(
    "--------------------------------------------- ".repeat(1000)));

let bar2 = document.querySelector("#progress");
window.addEventListener("scroll", () => {
  let max = document.body.scrollHeight - innerHeight;
  bar2.style.height = `${(pageYOffset / max) * 100}%`;
});

//12 Focus
let help = document.querySelector("#help");
let fields = document.querySelectorAll("input");

for (let field of Array.from(fields)) {
  field.addEventListener("focus", event => {
    let text = event.target.getAttribute("data-help");
    help.textContent = text;
    help.style.opacity = "0.5"
  });
  field.addEventListener("blur", event => {
    help.textContent = "";
  });
}

//Events and event loops
let workerscript = new Worker("workerScript.js");
workerscript.addEventListener("message", event => {
  console.log("Response:", event.data);
});
workerscript.postMessage(5);
workerscript.postMessage(24);


//timers

let bombTimer = setTimeout(() => {
  console.log("Mission failed, we'll get 'em next time");
}, 5000);

if (Math.random() < 0.5) {
  console.log("And boom goes the dynamite");
  clearTimeout(bombTimer);
}

let ticks = 0;
let clock = setInterval(() => {
  console.log("tick", ticks++ + "0");
  if (ticks === 5) {
    clearInterval(clock);
    console.log("stop.");
  }
}, 2000);


//Debouncing
let textarea = document.querySelector("textarea");
let timeout;
textarea.addEventListener("input", () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => console.log("Typed!"), 9000);
});

let scheduled = null;
const mousePosition = document.querySelector("#mousePos");

window.addEventListener("mousemove", event => {
  if (!scheduled) {
    setTimeout(() => {
      mousePosition.textContent =
          `Mouse postion on page:  ${scheduled.pageX}, ${scheduled.pageY}`;
      scheduled = null;
    }, 250);
  }
  scheduled = event;
});


//Balloon
let balloonSize = 15;

function balloonClick() {

  let balloonKey = document.querySelector("#balloonDiv");
  let windowPress = window;

  window.addEventListener("keydown", event => {
    event.preventDefault();

    if (event.key === "ArrowUp" && balloonSize <= 60) {
      balloonSize = balloonSize * 1.1;
      balloonKey.style.fontSize = balloonSize+"px";

      if (balloonSize >= 60) {
        document.getElementById("newBalloon").innerHTML = "💥";
        windowPress.removeEventListener("keydown", balloonClick, true);
      }

    } else if (event.key === "ArrowDown" && balloonSize <= 60) {
      balloonSize = balloonSize * 0.9;
      balloonKey.style.fontSize = (balloonSize)+"px";

    }
  });
}

window.addEventListener("keydown", balloonClick);