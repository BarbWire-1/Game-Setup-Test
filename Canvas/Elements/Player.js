import {CanvasElement} from '../CanvasElement.js'

export class Player extends CanvasElement {
    constructor(canvas, options) {
        super(canvas, options.x, options.y, options.fill);
        this.width = 50;
        this.height = 50;
        this.vx = 0;
        this.gravity = 1.5;
        this.vy = 0;
        this.jumping = false;
    
    }

    jump() {
        if (!this.jumping) {
            //this.timeFix gets passed from controllerUpdate
            this.vy -= 50 * this.timeFix;
            this.jumping = true;
        }
    }

    moveLeft() {
        this.vx -= 0.5 * this.timeFix;
    }

    moveRight() {
        this.vx += 0.5 * this.timeFix;
    }

    draw() {
  
        super.draw(); // currently only includes fillStyle
        this.context.beginPath();
        this.context.rect(this.x , this.y , this.width, this.height);
        this.context.fill();
       
    }
    
    
}
