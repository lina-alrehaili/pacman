var model = {

  left: {
    x: -1,
    y: 0
  },

  up: {
    x: 0,
    y: -1
  },

  right: {
    x: 1,
    y: 0
  },

  down: {
    x: 0,
    y: 1
  },

  world: [
  // 28w * 31l
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1,
    1,2,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,2,1,
    1,2,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,2,1,
    1,2,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,2,1,
    1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,
    1,2,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,2,1,
    1,2,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,2,1,
    1,2,2,2,2,2,2,1,1,2,2,2,2,1,1,2,2,2,2,1,1,2,2,2,2,2,2,1,
    1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,1,1,
    1,1,1,1,1,1,2,1,1,1,1,1,2,0,0,2,1,1,1,1,1,2,1,1,1,1,1,1,
    1,1,1,1,1,1,2,1,1,0,0,0,0,0,0,0,0,0,0,1,1,2,1,1,1,1,1,1,
    1,1,1,1,1,1,2,1,1,0,1,1,1,1,0,1,1,1,0,1,1,2,1,1,1,1,1,1,
    1,1,1,1,1,1,2,1,1,0,1,1,1,1,0,1,1,1,0,1,1,2,1,1,1,1,1,1,
    1,0,0,0,0,1,2,2,2,0,1,1,1,1,0,1,1,1,0,2,2,2,1,0,0,0,0,1,
    1,1,1,1,1,1,2,1,1,0,1,1,1,1,1,1,1,1,0,1,1,2,1,1,1,1,1,1,
    1,1,1,1,1,1,2,1,1,0,1,1,1,1,1,1,1,1,0,1,1,2,1,1,1,1,1,1,
    1,1,1,1,1,1,2,1,1,0,0,0,0,0,0,0,0,0,0,1,1,2,1,1,1,1,1,1,
    1,1,1,1,1,1,2,1,1,0,1,1,1,1,1,1,1,1,0,1,1,2,1,1,1,1,1,1,
    1,1,1,1,1,1,2,1,1,0,1,1,1,1,1,1,1,1,0,1,1,2,1,1,1,1,1,1,
    1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1,
    1,2,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,2,1,
    1,2,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,2,1,
    1,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,1,
    1,1,1,2,1,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,2,1,1,1,
    1,1,1,2,1,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,2,1,1,1,
    1,2,2,2,2,2,2,1,1,2,2,2,2,1,1,2,2,2,2,1,1,2,2,2,2,2,2,1,
    1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,
    1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,
    1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
  ],
  pacman: {
    name: "pacman",
    x: 1, 
    y: 7,
    last_x: 2,
    last_y: 7,
    rotation: 0,
  },

  pinky: {
    name: "pinky",
    x: 14, 
    y: 12,
    last_x: 14,
    last_y: 13,
    s_target_x: 1,
    s_target_y: 1,
    a_target_x: 0,
    a_target_y: 0,
    rotation: 0,
  },

  inky: {
    name: "inky",
    x: 14, 
    y: 13,
    last_x: 14,
    last_y: 14,
    s_target_x: 27,
    s_target_y: 1,
    a_target_x: 0,
    a_target_y: 0,
    rotation: 0,
  },

  blinky: {
    name: "blinky",
    x: 14, 
    y: 14,
    last_x: 14,
    last_y: 15,
    s_target_x: 1,
    s_target_y: 30,
    a_target_x: 0,
    a_target_y: 0,
    rotation: 0,
  },

  clyde: {
    name: "clyde",
    x: 14, 
    y: 15,
    last_x: 14,
    last_y: 16,
    s_target_x: 27,
    s_target_y: 30,
    a_target_x: 0,
    a_target_y: 0,
    rotation: 0,
  },

  score: 0,
  lives: 3
};

var view = {

  set_box_class: function() {
    var that = this;
    switch (model.world[that]) {
      case 0:
        document.getElementById(that).className = 'blank';
        break;
      case 1:
        document.getElementById(that).className = 'brick';
        break;
      case 2:
        document.getElementById(that).className = 'coin';
        break;
      case 3:
        document.getElementById(that).className = 'cherry';
        break;
      default:
        break;
    }
  },

  draw_world: function() {
    document.getElementById('world').innerHTML = "";
    var count = 0;
    var row_count = 0;
    for (var i = 0; i < model.world.length; i++) {
      count += 1;
      if (count === 1) {
        document.getElementById('world').innerHTML += "<tr id= 'r"+row_count+"'>";
        document.getElementById("r"+row_count).innerHTML += "<td id='"+i+"' style = '-webkit-transform: rotate(0deg)'></td>";
      } else if (count === 28) {
        document.getElementById("r"+row_count).innerHTML += "<td id='"+i+"' style = '-webkit-transform: rotate(0deg)'></td>";
        document.getElementById('world').innerHTML += "</tr>";
        count = 0;
        row_count += 1;
      } else {
        document.getElementById("r"+row_count).innerHTML += "<td id='"+i+"' style = '-webkit-transform: rotate(0deg)'></td>";
      }
      view.set_box_class.call(i);
    }
  },

  draw_character: function() {
    var that = this;
    var charid = (that.x + that.y * 28);
    document.getElementById(charid).className = that.name;
    document.getElementById(charid).setAttribute("style", "-webkit-transform: rotate(" + that.rotation + "deg)");
    controller.lose_life();
  },

  draw_score: function() {
    document.getElementById('score').innerHTML = "";
    document.getElementById('score').innerHTML =
      "<div class='score' style='top: 75px'>" + "SCORE: " + model.score + "</div>";
  },
  draw_lives: function() {
    document.getElementById('lives').innerHTML = "";
    document.getElementById('lives').innerHTML =
      "<div class='lives' style='top: 75px; left: 200px'>" + "LIVES: " + model.lives + "</div>";
  }
};

var controller = {

  on_board: function(a, b) {
    if ((a > 0 && a < 27) && (b > 0 && b < 31)) {
      return true;
    } else {
      return false;
    }
  },

  lose_life: function() {
    var arr = [model.pinky, model.inky, model.blinky, model.clyde];
    for(i in arr) {
      if (arr[i].x == model.pacman.x && arr[i].y == model.pacman.y) {
        var lives_left = model.lives;
        var current_score = model.score;
        return function() {
          location.reload();
          model.lives = lives_left - 1;
          model.score = curren_score;
        }
      }
    }
  },

  move_pacman: function(e) {
    var that = model.pacman;
    that.last_x = that.x;
    that.last_y = that.y;

    switch (e.keyCode) {
      case 37:
        if ( model.world[(that.x + model.left.x + (that.y * 28))] != 1 ) {
          that.x += model.left.x;
          that.rotation = 180;
        }
        break;

      case 38:
        if (model.world[(that.x + ((that.y + model.up.y) * 28))] != 1) {
          that.y = that.y + model.up.y;
          that.rotation = 270;
        }
        break;

      case 39:
        if (model.world[(that.x + model.right.x + (that.y * 28))] != 1) {
          that.x = that.x + model.right.x;
          that.rotation = 0;
        }
        break;

      case 40:
        if (model.world[that.x + ((that.y + model.down.y) * 28)] != 1) {
          that.y = that.y + model.down.y;
          that.rotation = 90;
        }
        break;

      default:
        break;
    };

    if (model.world[((that.y * 28) + (that.x))] == 2) {
      model.world[(that.last_x + (that.last_y * 28))] = 0;
      model.score += 10;
    };

    if (model.world[((that.y * 28) + (that.x))] == 3) {
      model.world[(that.last_x + (that.last_y * 28))] = 0;
      model.score += 100;
    };
    view.set_box_class.call((that.last_x + that.last_y * 28));
    view.draw_character.call(that);
  },

  ghost_move: function(typeOfMove) {
    var that = this;
    var target_x = NaN;
    var target_y = NaN;

    if (typeOfMove == 'scatter') {
      target_x = that.s_target_x;
      target_y = that.s_target_y;
    }

    if (typeOfMove == 'attack') {
      target_x = that.a_target_x + model.pacman.x;
      target_y = that.a_target_y + model.pacman.y;
    }

    var move_left = { x: that.x + model.left.x, y: that.y };
    var move_up = { x: that.x, y: that.y + model.up.y };
    var move_right = { x: that.x + model.right.x, y: that.y };
    var move_down = { x: that.x, y: that.y + model.down.y };
    var arr = [move_left, move_up, move_right, move_down];
    

    var validity = false;

    while (validity == false) {
      validity = true;
      for (i in arr) {
        var next_move = model.world[arr[i].x + arr[i].y * 28];
        if (next_move == 1) {
          arr.splice(i, 1);
          validity = false;
        } else if (controller.on_board(arr[i].x, arr[i].y) == false) {
          arr.splice(i, 1);
          validity = false;
        } else if ((arr[i].x == that.last_x && arr[i].y == that.last_y)) {
          arr.splice(i, 1);
          validity = false;
        }
      }
    };

    if ((that.x < 9 || that.x > 18) && (that.y > 11 || that.y < 17)) {
      for (i in arr) {
        
      }
    }

    var ctt = { 
      x: arr[0].x, 
      y: arr[0].y 
    };

    
    for (i in arr) {
      if ( (Math.abs(arr[i].x - target_x) + Math.abs(arr[i].y - target_y)) <= (Math.abs(ctt.x - target_x) + Math.abs(ctt.y - target_y)) ) {
        ctt.x = arr[i].x;
        ctt.y = arr[i].y;
      }
    };

    view.set_box_class.call(that.last_x + that.last_y * 28);

    that.last_x = that.x;
    that.last_y = that.y;

    that.x = ctt.x;
    that.y = ctt.y;

    

    if (that.x == move_left.x && that.y == move_left.y) {
      that.rotation = 0;
    }; 
    if (that.x == move_up.x && that.y == move_up.y) {
      that.rotation = 0;
    };
    if (that.x == move_right.x && that.y == move_right.y) {
      that.rotation = 0;
    };
    if (that.x == move_down.x && that.y == move_down.y) {
      that.rotation = 0;
    };

    view.draw_character.call(that);
    view.set_box_class.call(that.last_x + that.last_y * 28);

  },
};


function init() {
  view.draw_world();
  view.draw_character.call(model.pacman);
  view.draw_character.call(model.pinky);
  view.draw_character.call(model.inky);
  view.draw_character.call(model.blinky);
  view.draw_character.call(model.clyde);
  view.draw_score();
  view.draw_lives();
}

window.onload = init;
document.onkeydown = controller.move_pacman;
document.onkeydown;

function ghosts_scatter() {
  var ghosts = [model.pinky, model.inky, model.blinky, model.clyde];
  for (i in ghosts) {
    controller.ghost_move.call(ghosts[i], 'scatter');
  }
  
};

function ghosts_attack() {
  var ghosts = [model.pinky, model.inky, model.blinky, model.clyde];
  for (i in ghosts) {
    controller.ghost_move.call(ghosts[i], 'attack');
  }
  controller.lose_life();
};

var start = window.setInterval(ghosts_scatter, 500);

function stop() { window.clearInterval(start); };

window.setTimeout(stop, 10000);

window.setTimeout(function() { start = window.setInterval(ghosts_attack, 500); }, 11000);


 


