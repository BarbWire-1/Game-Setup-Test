
// TODO make this generic as extension of CanvasElement
class Line {
    constructor (canvas, width, stroke) {
        this.canvas = document.querySelector(canvas);
        this.context = this.canvas.getContext('2d');
        this.lineWidth = width;
        this.strokeStyle = stroke;
        this.timingFix = 1;
        this.z_index = 0;
        
    }
    
    update(timeFix) {
        this.timingFix = timeFix;
        this.draw();
    }
    draw() {
        this.context.strokeStyle = this.strokeStyle;
        this.context.lineWidth = 8
        this.context.beginPath()
        this.context.moveTo(0, this.canvas.height - 30);
        this.context.lineTo(this.canvas.width, this.canvas.height - 30)
        this.context.stroke()
        
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

export const line = new Line('canvas', 8, 'red')

