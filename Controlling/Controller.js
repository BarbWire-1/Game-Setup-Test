// keeps an array of all (active) elements to draw
class Controller{
    
    constructor () {
        this.elements = []; 
        this.timeFix = 1;
    }
    addElement(element) {
        this.elements.push(element);
    }

    removeElement(element) {
        const index = this.elements.indexOf(element);
        if (index > -1) {
            this.elements.splice(index, 1);
        }
    }
    update(timefix) {
        this.timeFix = timefix;

        // Update the state or properties of all elements.
        this.elements.forEach(element => element.update(this.timeFix));
    }
    
    
    reorderElements() {
        this.elements.sort((a, b) => a._zIndex - b._zIndex);
        console.log(this.elements)
    }
    
    
    
}
export const controller  = new Controller()
