input.onGesture(Gesture.Shake, function () {
    if (randint(1, 6) == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (randint(1, 6) == 2) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . . .
            . # . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (randint(1, 6) == 3) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (randint(1, 6) == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (randint(1, 6) == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (randint(1, 6) == 6) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})
