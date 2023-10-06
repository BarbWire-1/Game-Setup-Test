/*
This is just testing ideas how I think a gamelogic could be set up.
Not about a real game, but about logical structure.
First approach... and I feel rather challenged!
*/

import * as parts from './gamePartsExport.js';

// nice, but not used currently to not make a ton of single globals
function destructureObject(obj) {
  for (const key in obj) {
    window[key] = obj[key];
  }
}


const {
    canvas,// creates the context and bg
    line,// just an additional element
    controller,// holds all elements which shall be drawn
    eventBus,// manages keyListener
    Player,// simple squares for now
    PlayerHandler// apllies moves, boundaries and "physics"
} = parts;


let config = 
{ 
    // frame and "physics"
    FPS: 60,
    WIDTH: canvas.width,
    HEIGHT: canvas.height,
    GRAVITY: 1.5,
    ACCEL: 0.9,
    lastFrameTime: 0,
    
    // players
    playerSettings: [
        {  x: 0, y: 0 , fill: 'orange' },
        { x: 100, y: 50 , fill: 'limegreen' }
    ],
    activePlayer: undefined,
    
    
    // TODO add an animation-controller with dynamically subscribable animations for els taking el props as var❓
    // TODO switch to using Web Animation API with keyFrames instead of calculating in js❓
    // TODO check the transmission of keyPressed info... I think I made this too complicated.
    // controll-keys
    keyActions: {
        38: { action: 'up', active: false },
        39: { action: 'right', active: false },
        37: { action: 'left', active: false },
    }
} 


// Set associated key to active
function setAction(keyCode, isPressed) {
    if (config.keyActions[keyCode]) {
        config.keyActions[keyCode].active = isPressed;
    }
}

// keyListener event handler
eventBus.subscribe('keyListener', arr => {
    const [ keyCode, isPressed ] = arr;
    setAction(keyCode, isPressed);
});



// create the player instances
const players = config.playerSettings
    .map(props => new Player(canvas, props));

// create array of elements to draw
players.map(p => controller.addElement(p));
controller.addElement(line);

// choose a player by index as activePlayer
function setActivePlayer(index) {
  if (index >= 0 && index < players.length) {
    config.activePlayer = players[index];
  }
}

setActivePlayer(0);


// handles keyInputs and 'physics'
const playerHandler = new PlayerHandler(
    config.activePlayer,
    config.keyActions,
    players,
    config.GRAVITY,
    config.ACCEL,
    config.WIDTH,
    config.HEIGHT
);


 
// THE LOOP
const loop = function (currentTime) {
   
    // calc frame-diffs and adjust
    const elapsedTime = currentTime - config.lastFrameTime;
    let timeFix = 1000 / elapsedTime / config.FPS || 1;

   
    playerHandler.player = config.activePlayer;
    playerHandler.handlePlayerInput(); // Key events
    playerHandler.updatePlayers(); // Boundaries and "physics", calcs only

    canvas.woosh(timeFix);

    // redraw all other elements
    controller.update(timeFix)// updates with updated values from Handler
    config.lastFrameTime = currentTime;

 
    // recall
    requestAnimationFrame(loop);
}

// init
requestAnimationFrame(loop);


// setActivePlayer(0); //✅

// player1.setZindex = 1;//✅

players[ 0 ].zIndex = 1;


// TODO add id/classes to els and a function for setting layer for individuals or bulk-setting



