AnimationEffect({
    targets: 'div.box.red',
    translateY: [
        { value: 200, duration: 500 },
        { value: 0, duration: 800 }
    ], 
    rotate: {
        value: 'lturn',
        easing: 'easeInOutSine'
    }
});