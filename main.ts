let x = 0
let y = 0
let z = 0
let gameOver = false

basic.forever(function () {

    input.onButtonPressed(Button.A, function () {
        gameOver = false
    })

    while (gameOver != true) {
        input.setAccelerometerRange(AcceleratorRange.TwoG)
        x = input.acceleration(Dimension.X)
        y = input.acceleration(Dimension.Y)
        z = input.acceleration(Dimension.Z)
        pause(100)
        let sum = x + y + z


        basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
        if (sum >= -500 || sum <= -1200) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
            gameOver = true
        }

        basic.pause(100)
    }

})