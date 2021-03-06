"use strict";

/* Globals - running / initializing once (when app loads) */
const S_INTRO = 0;
const S_GAME = 1;

var scene = S_INTRO;
var controls = false;
/*
const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');
*/
var fps = 60;
var start = Date.now();
var frameDuration = 1000 / fps;
var lag = 0;

document.addEventListener('keydown', event => {
  if (controls === false) {
    return;
  }

  if (event.key == 'ArrowUp' || event.keyCode == 87) {
    event.preventDefault()
    if (controls.up !== false) {
      controls.up();
    }
  } else if (event.key == 'ArrowDown' || event.keyCode == 40) {
    event.preventDefault()
    if (controls.down !== false) {
      controls.down();
    }
  } else if (event.key == 'ArrowLeft' || event.keyCode == 37) {
    event.preventDefault()
    if (controls.left !== false) {
      controls.left();
    }
  } else if (event.key == 'ArrowRight' || event.keyCode == 39) {
    event.preventDefault()
    if (controls.right !== false) {
      controls.right();
    }
  }
});

function loop() {
	//requestAnimationFrame(loop, canvas);
  window.requestAnimationFrame(loop);

	var current = Date.now();
	var elapsed = current - start;
	start = current;
	lag += elapsed;

	while (lag >= frameDuration){
    sceneFade();
//		if (scene == S_INTRO) {
 //     introUpdate();
		//}

		lag -= frameDuration;
	}

	var lagOffset = lag / frameDuration;
	render(lagOffset);
}

function render(lagOffset) {
//	ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

//  if (scene == S_INTRO) {
//    introRender();
//  }
}

introSetup();
loop();

function sleep(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}