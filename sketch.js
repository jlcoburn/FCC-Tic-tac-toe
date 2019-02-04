let board = [
              [0, 0, 0],
              [0, 0, 0],
              [0, 0, 0]
            ];

let player = '😸'
function setup() {
  const width = windowWidth; 
  const height  = windowHeight;
  createCanvas(width, height);
  textSize(150);
  translate(200,100);
  strokeWeight(3);
  line(0,200,600, 200);
  line(0,400, 600, 400);
  line(200, 0, 200, 600);
  line(400,0,400, 600);
  stroke(51);
 
}

function mouseClicked() {
  let location = getBoxNumber(mouseX,mouseY);
  if (location === 1 && isValidMove(0,0)) {
    console.log('woohhoo')
    text(player,200,250);
  } else if (location === 2 && isValidMove(0,1)) {
    text(player, 400,250 )&& isValidMove(0,0)
  } else if (location === 3 && isValidMove(0,2)) {
    text(player, 600, 250)
  } else if (location === 4 && isValidMove(1,0)) {
    text(player, 200, 450);
  } else if (location === 5 && isValidMove(1,1)) {
    text(player, 400, 450)
  } else if (location === 6 && isValidMove(1,2)) {
    text(player, 600, 450)
  } else if (location === 7 && isValidMove(2,0) ) {
    text(player, 200, 650);
  } else if(location === 8 && isValidMove(2,1) ) {
    text(player, 400, 650)
  } else  if (location === 9 && isValidMove(2,2)) {
    text(player, 600, 650)
  }
  player ===  '😸' ? player = '🐶' : player =  '😸'
  console.log(board)
}


function isValidMove(x, y) {
  console.log(board[x][y])
  if (board[x][y] === 0) {
    console.log('yep')
    if (player ===  '😸') board[x][y] = 1 
    if (player ===  '🐶') board[x][y] = 2
    return true;
  }
  return false;
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