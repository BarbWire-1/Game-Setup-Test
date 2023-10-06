
class PlayerHandler {
    constructor (player, keyActions, players, gravity, accel, canvasWidth, canvasHeight) {
        
        this.player = player;
        this.keyActions = keyActions;
        this.players = players;
        this.gravity = gravity;
        this.accel = accel;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }

    // TODO not sure whether not only pass the key here (???)
    handlePlayerInput() {
        const action = this.keyActions;
        const player = this.player;
        // actions
        switch (true) {
            case action[ 38 ].active && player.jumping === false:
                player.jump();
                break;
            case action[ 37 ].active:
                player.moveLeft();
                break;
            case action[ 39 ].active:
                player.moveRight();
                break;
            default:
                break;
        }
    }

    updatePlayers() { // called in frame
       
        this.players.forEach(player => {
            // "physics"
            //TODO would be obsolete if switching to keyFrames
            player.x += player.vx;
            player.y += player.vy;
            player.vx *= this.accel;
            player.vy *= this.accel;
            player.vy += this.gravity;
            
            //Boundaries y
            //TODO set this elsewhere?
            player.x = Math.max(0, Math.min(this.canvasWidth - player.width, player.x));
            if (player.y > this.canvasHeight - player.height - 34) {
                player.jumping = false;
                player.y = this.canvasHeight - player.height - 34;
                player.vy = 0;
            }
        });
    }
    
    
}

export { PlayerHandler };
