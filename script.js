$(document).ready(function(){
var world = [
  [2,2,2,2,2,2,2,2,2,2],
  [2,0,3,1,1,1,1,2,3,2],
  [2,1,2,2,2,2,2,2,1,2],
  [2,1,1,1,1,1,1,2,1,2],
  [2,1,1,1,2,2,1,2,1,2],
  [2,1,2,1,2,1,1,2,1,2],
  [2,1,2,1,2,1,1,2,1,2],
  [2,1,2,1,2,1,1,1,1,2],
  [2,1,2,1,1,1,1,1,0,2],
  [2,2,2,2,2,2,2,2,2,2],
];

var score = 0;
var gameActive = true;
var lives = 3;
var pacman = {
  x: 1,
  y: 1
};

var ghost = {
  x: 8,
  y: 7
}

function displayWorld(){
  var output = '';

  for(var i=0; i< world.length; i++){
    output += "\n<div class='row'>\n";
    for (var j=0; j< world[i].length ; j++){
      if(world[i][j] == 2)
        output += "<div class='brick'></div>";
      else if(world[i][j] == 1)
        output += "<div class='coin'></div>";
      if(world[i][j] == 0)
        output += "<div class='empty'></div>";
      else if(world[i][j] == 3)
        output += "<div class='cherry'></div>";
    }
    output += "</div>";
  }
  // console.log(output);
  document.getElementById('world').innerHTML = output;
}

function displayPacman(){
  document.getElementById('pacman').style.top = pacman.y*20 + "px";
  document.getElementById('pacman').style.left = pacman.x*20 + "px";
}
function displayGhost(){
  document.getElementById('ghost').style.top = ghost.y*20 + "px";
  document.getElementById('ghost').style.left = ghost.x*20 + "px";
}
function displayScore(){
    document.getElementById('scoreText').innerHTML = score;
    document.getElementById('liveText').innerHTML = lives;
}



document.onkeydown = function(e){
  // left
  if(e.keyCode == 37) {
    if(world[pacman.y][pacman.x-1]!==2){
    pacman.x--;}
    $('#pacman').css('transform', 'rotate(180deg)')
  }
  //right
   if(e.keyCode == 39) {
     if(world[pacman.y][pacman.x+1]!==2){
    pacman.x++;}
    $('#pacman').css('transform', 'rotate(0deg)')
  }
  //up
  if(e.keyCode == 38) {
    if(world[pacman.y-1][pacman.x]!==2){
    pacman.y--;}
    $('#pacman').css('transform', 'rotate(270deg)')
  }
  //down
   if(e.keyCode == 40) {
     if(world[pacman.y+1][pacman.x]!==2){
    pacman.y++;}
    $('#pacman').css('transform', 'rotate(90deg)')
  }
  //remove coin, add 10 points
  if(world[pacman.y][pacman.x] == 1){
    world[pacman.y][pacman.x] = 0;
    score += 10;
  }
  //remove cherry, add 50 points
 else if(world[pacman.y][pacman.x] == 3){
    world[pacman.y][pacman.x] = 0;
    score += 50;
  }
    displayScore();
    if (gameActive) {
      displayWorld();
      displayPacman();
    }
  }
  function moveGhost(){
    var random = Math.floor(Math.random()*4) + 37;
    console.log(random)

    switch (random) {
      case 37:
      console.log('in 37')
      if(world[ghost.y][ghost.x-1]!=2){
        ghost.x --;
          displayGhost();
      }
      break;
      case 38:
      console.log('in 38')
      if(world[ghost.y-1][ghost.x]!=2){
        ghost.y --;
          displayGhost();
      }
      break;
      case 39:
      console.log('in 39')
      if(world[ghost.y][ghost.x+1]!=2){
        ghost.x ++;
          displayGhost();
      }
      break;
      case 40:
      console.log('in 40')
      if(world[ghost.y+1][ghost.x]!=2){
        ghost.y ++;
          displayGhost();
      }
      break;
      default:
      console.log('breaking!!')
    }
    if(ghost.y === pacman.y && ghost.x === pacman.x){
      lives -= 1;
    }
    if(lives === 0){
      gameActive = false;
    }
  }


  setInterval(moveGhost, 500);

  displayWorld();
  displayPacman();
  displayScore();
  displayGhost();
  moveGhost();
});
