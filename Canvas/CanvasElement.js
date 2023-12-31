import { controller } from "../gamePartsExport.js";

export class CanvasElement {
    
    constructor (canvas, x, y, fill) {
        
        this.context = canvas.context;
        this.x = x;
        this.y = y;
        this.fill = fill || "orange";
        this.timeFix = 1;
        
        this._zIndex = 0;
    }

    update(timeFix) {
        this.timeFix = timeFix;
        this.draw();
    }

    draw() {
        this.context.fillStyle = this.fill;
         //this.context.fill();
    }
    
    set zIndex(newIndex) {
        this._zIndex = newIndex;
  console.log(this._zIndex)
        controller.reorderElements(); // Call the reorder function when zIndex is changed.
        console.log(controller.elements)
    }
    get zIndex() {
        return this._zIndex;
    }
}
