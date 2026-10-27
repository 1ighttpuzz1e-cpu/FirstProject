let ball;


function setup() {
  createCanvas(400, 400); 
  ball = new Walker();
}


function draw() {
  background(220, 5);
  ball.move();
  ball.show();

  if(mouseIsPressed) {
    let mouse = createVector(mouseX, mouseY);
    ball.moveTo(mouse);
  }
}


function mousePressed() {
  let mouse = createVector(mouseX, mouseY);
  ball.moveTo(mouse);
}