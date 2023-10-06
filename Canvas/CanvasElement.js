import { controller } from "../gamePartsExport.js";

export class CanvasElement {
    
    constructor (canvas, x, y, fill) {
        
        this.context = canvas.context;
        this.x = x;
        this.y = y;
        this.fill = fill || "orange";
        this.timeFix = 1;
        
        this.z_index = 0;
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
    this.z_index = newIndex;
        controller.reorderElements(); // Call the reorder function when zIndex is changed.
        console.log(controller.elements)
    }
    get zIndex() {
        return this.z_indx;
    }
}
