import {eventBus} from './EventBus.js'

class KeyListener {
    constructor (eventDispatcher) { 
        this.keys = {};
        this.eventDispatcher = eventDispatcher || console.log()
    }
    isPressed(keyCode) {
        return this.keys[ keyCode ] ? keyCode  : false
    }
    down(e) {
        if (this.keys[ e.keyCode ]) return;
        this.keys[ e.keyCode ] = true;
        this.eventDispatcher([ e.keyCode, true, this.keys ]);
    }
    up(e){
        this.keys[e.keyCode ] = false;
        this.eventDispatcher([ e.keyCode, false, this.keys ]);
    }
    start(){
        window.addEventListener('keydown', this.down.bind(this));
        window.addEventListener('keyup', this.up.bind(this));
    };
    stop(){
            window.removeEventListener('keydown', this.down.bind(this));
            window.removeEventListener('keyup', this.up.bind(this));
    };
    
}
const keyListener = new KeyListener();

keyListener.start()
keyListener.eventDispatcher = arr => eventBus.dispatch('keyListener', arr);


export { keyListener };