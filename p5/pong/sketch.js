var p1, p2;
var p1V, p2V;
var p1S, p2S;
var ball, ballV;
var img;

//var  p1Color = color(255, 0, 0);
//var  p2Color = color(255, 0, 0);


function setup(){

  createCanvas(600, 400);

  p1 = p2 = height / 2 - 50;

  p1V = p2V = 0;
  p1S = p2S = 0;

  ball = createVector(width/2, height/2);
  ballV = createVector(random(-1, 1), random(-1, 1));
  ballV.mult(3);

  textAlign(CENTER);
  textSize(50);
  fill(255);
}




function draw(){

  background('rgb(0,255,0)');

  
  stroke('#222222');
  line(600/2,0, 600/2,400);
  strokeWeight(5.0);
  
  rect(20, p1, 10, 100);
  rect(width-30, p2, 10, 100);

  ellipse(ball.x, ball.y, 20);

  text(p1S + " | " +p2S, width / 2, 50);

  handlePaddles();

  handleBall();

}

function handleBall(){

  ball.x += ballV.x;
  ball.y += ballV.y;

  if (ball.y > height || ball.y <0 )
    ballV.y *=-1;

  if (ball.x <= 30){
// out of bounds
    if (ball.x <= 10){
      p2S++;
      reset();
      return;
    }
//right paddle

    if (ball.y > p1 && ball.y < p1 +100){

    ballV.x *= -1;
    ballV.mult(random(1, 1.1));
    }

  } else if (ball.x >= width - 30 ){
//out of bounds
    if (ball.x >= width - 10){
      p1S++;
      reset();
      return;

    }
//left paddle
    if (ball.y > p2 && ball.y < p2 +100){

    ballV.x *= -1;
    ballV.mult(random(1, 1.1));
    }
    
    }
}

function reset(){
  ball = createVector(width / 2, height / 2); //center
}


function handlePaddles(){
//player1
  if (keyIsDown(87)) {
    /*up*/
    p1V -= 5;
  } else if (keyIsDown(83)) {
    /*down*/
    p1V +=5;
  }
//player2
  if (keyIsDown(UP_ARROW)) {
    /*up*/
    p2V -=5;
  } else if (keyIsDown(DOWN_ARROW)) {
    /*down*/
    p2V +=5;
  }

  p1 += p1V;
  p2 += p2V;
  
  p1V *= 0.4;
  p2V *= 0.4;

  p1 = constrain(p1, 0, height - 100);
  p2 = constrain(p2, 0, height - 100);
}

function myButton(){
  location.reload();
}

function myFunction(){
  alert("Your Rank Submitted!");
  return true;
  
}