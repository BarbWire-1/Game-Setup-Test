class Canvas {
    
    constructor (width, height, fill) {
        
        this.el = document.querySelector('canvas');
        this.context = this.el.getContext('2d');
        this.width = this.context.canvas.width = width;
        this.height = this.context.canvas.height = height;
        this.timingFix = 1;
        this.fill = fill;
    }

    clear(timeFix) {
        
        this.timingFix = timeFix;
        this.context.fillStyle = this.fill;
        this.context.fillRect(0, 0, this.width, this.height);
    }
    
    // redraw context semitransparent to create a trail
    woosh(timeFix) {
        
        this.timingFix = timeFix;
        this.context.fillStyle = "rgba(0, 0, 0, 0.2)";
        this.context.fillRect(0, 0, this.width, this.height);
    }
        
    
}

export let canvas = new Canvas(2000, 800, '#202020')
