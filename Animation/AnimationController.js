// ideas for switching to Web Anaimation animationPlayState: // and using an animationController



// Central repository for keyframes and options

//TODO check for different relations px/duration and different easing-types
const animationData = {
    
    keyFrames: {
        moveLeft: (el) => [
            { transform: `translate(${el.x}px, ${el.y}px)` },
            { transform: `translate(${el.x - 100}px, ${el.y}px)` },
        ],
        moveRight: (el) => [
            { transform: `translate(${el.x}px, ${el.y}px)` },
            { transform: `translate(${el.x + 100}px, ${el.y}px)` },
        ],
        jump: (el) => [
            { transform: `translate(${el.x}px, ${el.y}px)` },
            { transform: `translate(${el.x}px, ${el.y - 100}px)` },
        ],
        //...
    },
    options: {
        duration: 1000,
        easing: 'ease-in-out',
        fill: 'forwards',
    },
};

class AnimationController {
    constructor() {
        this.animations = new Map();
    }

    addElement(elementID, element) {
        this.animations.set(elementID, element);
    }

    // more methods like remove?
}


// TODO types of els with access to different animations in general?
class AnimatedElement {
    constructor(el, animationController) {
        this.el = el;
        this.animationController = animationController;
    }

    generateAnimation(action) {
        if (animationData.keyFrames[action]) {
            const keyframes = animationData.keyFrames[action](this.el);
            const options = animationData.options;
            // Create an Animation instance and store it
            const animation = new Animation(this.el, keyframes, options);
            // Play the animation
            animation.play();
        }
    }

    moveLeft() {
        this.generateAnimation('moveLeft');
    }

    moveRight() {
        this.generateAnimation('moveRight');
    }

    jump() {
        this.generateAnimation('jump');
    }
}


// Usage

// on creating els decide which kind of animated el if at all
const el = { x: 100, y: 200 };
const animatedPlayer = new AnimatedElement(el, animationController);

// Add el to AnimationController for managing animations
animationController.addElement('player', animatedPlayer);

// Trigger animation like...
animatedPlayer.moveLeft(); 
