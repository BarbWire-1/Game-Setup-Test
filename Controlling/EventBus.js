// currently used for keyListener
class EventBus{
    constructor () {
        this.events = {};
    }
    subscribe(event, callback) {
        if (!this.events[ event ]) {
            this.events[ event ] = [];
        }
        //console.log(event + " subscribed!")
        this.events[ event ].push(callback);
    }
    unsubscribe(event, callback) {
        if (!this.events[ event ]) return;
        this.events[ event ] = this.events[ event ].filter(cb => cb != callback);
        
        
    }
    dispatch(event, payload) {
        if (!this.events[ event ]) return;
        this.events[ event ].map(cb => cb(payload));
        
    }
    
    
}

export const eventBus = new EventBus();
