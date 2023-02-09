let x = 0
let y = 0
let z = 0
// x tolerance 100
// 
// y tolerance 150
basic.forever(function () {
    
    input.setAccelerometerRange(AcceleratorRange.TwoG)
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    z = input.acceleration(Dimension.Z)
    pause(100)
basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    if (x >= 100 || x <= -100) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    if (y >= 150 || y <= -150) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    if (z > 0) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    basic.pause(100)
})
