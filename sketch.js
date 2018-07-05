let board = [
              ['', '', ''],
              ['', '', ''],
              ['', '', '']
            ];

function setup() {
  const width = windowWidth; 
  const height  = windowHeight;
  createCanvas(width, height);
  // drawBoard(width, height);
  translate(200,100);
  strokeWeight(3);
  line(0,200,600, 200);
  line(0,400, 600, 400);
  line(200, 0, 200, 600);
  line(400,0,400, 600);
  stroke(51);
 
}

function draw() {
  if (mouseIsPressed) {
      text('X',mouseX,mouseY);
      let location = getBoxNumber(mouseX,mouseY);
      if (location === 1) {
        
      }

      }
      // console.log(mouseX,mouseY);
      
  } 
}

function drawBoard(width, height) {

}

function getBoxNumber(x,y) {
  if (x > 200 && x < 400 && y > 100 && y < 300) {
    return 1;
  } else if (x > 400 && x < 600 &&  y > 100 && y < 300) {
    return 2;
  } else if (x > 600 && x < 800 &&  y > 100 && y < 300) {
    return 3;
  } else if (x > 200 && x < 400 && y > 300 && y < 500) {
    return 4;
  } else if (x > 400 && x < 600 &&  y > 300 && y < 500) {
    return 5;
  } else if (x > 600 && x < 800 &&  y > 300 && y < 500) {
    return 6;
  } else if (x > 200 && x < 400 && y > 500 && y < 700) {
    return 7;
  } else if (x > 400 && x < 600 &&  y > 500 && y < 700) {
    return 8;
  } else if (x > 600 && x < 800 &&  y > 500 && y < 700) {
    return 9;
  }
}