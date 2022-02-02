const controller = new ScrollMagic.Controller();

const tweenCircle = new TimelineLite();

tweenCircle.add(
    TweenLite.to('.circle', 1, {
        rotation: 200,
        ease: Power1.easeInOut
    })
)

const circleScene = new ScrollMagic.Scene({
    triggerElement: '#animation1',
    duration: 1000,
    triggerHook: 0
})
.setTween(tweenCircle)
.setPin('#animation1')
.addTo(controller)

const tweenSimple = new TimelineLite();

tweenSimple.add(
    TweenLite.to('.simpleMain', 1, {
        css: {
            scale: 0.75,
            opacity: 0
        },
        ease: Power1.easeInOut,
        delay: 0.5
    })
)
tweenSimple.add(
    TweenLite.to('#s1', 1, {
        css: {
            opacity: 100,
            top: '50%',
        },
        ease: Power1.easeInOut,
    })
)
tweenSimple.add(
    TweenLite.to('#s1', 1, {
        css: {
            left: '37.5%'
        },
        ease: Power1.easeInOut,
        delay: 1
    })
)
tweenSimple.add(
    TweenLite.to('#s2', 1, {
        css: {
            opacity: 100,
            top: '50%',
        },
        ease: Power1.easeInOut,
    })
)
tweenSimple.add(
    TweenLite.to('#s2', 1, {
        css: {
            opacity: 0,
            top: '0%',
        },
        ease: Power1.easeInOut,
        delay: 1
    })
)
tweenSimple.add(
    TweenLite.to('.simpleEquals', 1, {
        css: {
            opacity: 100,
            top: '50%',
        },
        ease: Power1.easeInOut,
    })
)
tweenSimple.add(
    TweenLite.to('.simpleProofThirds', 1, {
        css: {
            opacity: 0,
            top: '0%',
        },
        ease: Power1.easeInOut,
        delay: 1
    }),
)
tweenSimple.add(
    TweenLite.to('#simpleProofDec', 1, {
        css: {
            opacity: 100,
            top: '50%',
        },
        ease: Power1.easeInOut,
    }),
)
tweenSimple.add(
    TweenLite.to('#equals', 1, {
        css: {
            opacity: 0,
            top: '0%',
        },
        ease: Power1.easeInOut,
        delay: 1
    }),
)
tweenSimple.add(
    TweenLite.to('#s999', 1, {
        css: {
            opacity: 100,
            top: '50%',
        },
        ease: Power1.easeInOut,

    }),
)



const simpleScene = new ScrollMagic.Scene({
    triggerElement: '#animation2',
    duration: 3000,
    triggerHook: 0
})
.setTween(tweenSimple)
.setPin('#animation2')
.addTo(controller)