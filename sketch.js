/*
  Simple image display example

  mouse + space bar will invert
  Also, display a random bit of text
*/

var regularImg; // Declare variable 'img'.
var inverseImg;
var bRegular = true;
var imageList = [];
var img;

var startMillis;

var state;
var stateStatic;
var stateImage1 = 1;
var stateImage2 = 2;
var stateImage3 = 3;
var stateImage4 = 4;
var stateImage5 = 5;
var stateImage6 = 6;
let a = 0.0;
let s = 0.0;
let angle = 0;



// preload() will execture before setup()
function preload() {
  imageList[0] = loadImage('assets/image1.jpg');
  imageList[1] = loadImage('assets/image2.jpg');
  imageList[2] = loadImage('assets/image3.jpg');
  imageList[3] = loadImage('assets/image4.jpg');
  imageList[4] = loadImage('assets/image5.jpg');
  imageList[5] = loadImage('assets/image6.jpg');
}

function setup() {
  print("imageSequenceP5 Example");

  imageMode(CENTER);
  createCanvas(1024, 800);
  startMillis = millis();
  state = stateImage1;

}

function draw() {
  background(254, 218, 240);

  if (state == stateImage1)
    image1();

  if (state == stateImage2)

    image2();

  if (state == stateImage3)
    image3();

  if (state == stateImage4)
    image4();

  if (state == stateImage5)
    image5();

  if (state == stateImage6)
    image6();



  //  // When timer expires, after 1000ms, choose a new random image
  if (millis() > startMillis + 1000) {
    chooseNewImage();
    startMillis = millis();
  }
}



// chooses a new items from the array, select a random
// index 0 to length of array-1
function chooseNewImage() {
  state++;
  print("old state = " + state);
  if (state > stateImage6)
    state = stateImage1;
  print("choosing new image, sate = " + state);
}


function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


function image1() {
  for (var x = 0; x <= width; x += 50) { // ------------------
    for (var y = 0; y <= height; y += 50) { //------------------
      fill(0, 0, random(255));
      image(imageList[0], width / 2, height / 2);
      noStroke();
      ellipse(x, y, 25, 25);
    }
  }

}

function image2() {

  for (var x = 0; x <= width; x += 50) { // ------------------
    for (var y = 0; y <= height; y += 50) { //------------------
      fill(random(255), 0, random(255));
      rect(x, y, 25, 25);
      image(imageList[1], width / 2, height / 2);
    }
  }

  push();
  fill(180, 218, 184);
  translate(width * 0.45, height * 0.3);
  rotate(frameCount / -100.0);
  star(0, 0, 10, 60, 5);
  pop();

  push();
  fill(180, 218, 240);
  translate(width * 0.60, height * 0.3);
  rotate(frameCount / -100.0);
  star(0, 0, 10, 60, 5);
  pop();

  push();
  fill(183, 184, 254);
  translate(width * 0.53, height * 0.3);
  rotate(frameCount / -100.0);
  star(0, 0, 10, 60, 5);
  pop();
}

function image3() {
  for (var x = 0; x <= width; x += 50) { // ------------------
    for (var y = 0; y <= height; y += 50) { //------------------
      fill(random(255), 0, 0);
      image(imageList[2], width / 2, height / 2);

      noStroke();
      for (let i = 0; i < 10; i++) {
        ellipse(x, y, 4, 10);
        rotate(PI / 5);
      }
    }
  }

  fill(251, 141, 205);
  push();
  translate(width * 0.35, height * 0.64);
  rotate(frameCount / -100.0);
  star(0, 0, 20, 60, 5);
  pop();

  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / -100.0);
  star(0, 0, 20, 60, 5);
  pop();

}

function image4() {
  for (var x = 0; x <= width; x += 50) { // ------------------
    for (var y = 0; y <= height; y += 50) { //------------------
      fill(random(255));
      rect(x, y, 60, 60);

      image(imageList[3], width / 2, height / 2);
    }
  }
  fill(251, 254, 165);

  push();
  translate(width * 0.25, height * 0.5);
  rotate(frameCount / -100.0);
  star(0, 0, 30, 70, 5);
  translate(width * 0.05, height * 0.5);
  rotate(frameCount / -100.0);
  star(0, 0, 12, 24, 5);
  pop();


  push();
  translate(width * 0.15, height * 0.25);
  rotate(frameCount / -20.0);
  star(0, 0, 30, 70, 5);
  translate(width * 0.05, height * 0.5);
  rotate(frameCount / -100.0);
  star(0, 0, 12, 24, 5);
  pop();

}

function image5() {

  for (var x = 0; x <= width; x += 50) { // ------------------
    for (var y = 0; y <= height; y += 50) { //------------------
      fill(0, random(255), 0);
      image(imageList[4], width / 2, height / 2);

      noStroke();
      for (let i = 0; i < 10; i++) {
        ellipse(x, y, 10, 40);
        rotate(PI / 5);
      }
    }
  }

  fill(109, 191, 165);

  push();
  translate(width * 0.4, height * 0.3);
  rotate(frameCount / 50.0);
  star(0, 0, 80, 40, 30);
  pop();

  push();
  translate(width * 0.6, height * 0.35);
  rotate(frameCount / 50.0);
  star(0, 0, 80, 40, 30);
  pop();




}

function image6() {

  for (var x = 0; x <= width; x += 50) { // ------------------
    for (var y = 0; y <= height; y += 50) { //------------------
      fill(random(255), 0, random(255));
      ellipse(x, y, 25, 25);
      image(imageList[5], width / 2, height / 2);
    }
  }

}


function keyPressed() {
  if (key == '1') {
    state = stateImage1;
    print("changing to image1");
  } else if (key == '2') {
    state = stateImage2;
    print("changing to image2");
  } else if (key == '3') {
    state = stateImage3;
    print("changing to image3");
  } else if (key == '4') {
    state = stateImage4;
    print("changing to image4");
  } else if (key == '5') {
    state = stateImage5;
    print("changing to image5");
  } else if (key == '6') {
    state = stateImage6;
    print("changing to image6");
  }
}