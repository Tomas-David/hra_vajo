//zreduju počet if je jich moc 
//dodělej i osu y



let x = 0
let y = 0
let z = 0
let gameOver = false
let dot = game.createSprite(2, 2)
basic.forever(function () {

    input.onButtonPressed(Button.A, function () {
        gameOver = false
        dot.isDeleted()
    })

    while (gameOver != true) {
        input.setAccelerometerRange(AcceleratorRange.TwoG)
        x = input.acceleration(Dimension.X)
        z = input.acceleration(Dimension.Z)
        pause(100)
        let sum = x + z 
        
        dot.setX(2)
        dot.setY(2)


        if(sum <= -1085){
            dot.move(-1)
            basic.pause(100)
        }

        if (sum <= -1130) {
            
            dot.move(-1)
            basic.pause(100)
        }

        if (sum <= -1150) {
            
            
            dot.move(-1)
            basic.pause(100)
        }

        if (sum >= -1030) {
            dot.move(1)
            basic.pause(100)
        }

        if (sum >= -1000) {

            dot.move(1)
            basic.pause(100)
        }

        if (sum >= -980) {

            dot.move(1)
            basic.pause(100)
        }

        

        if ( sum  >= -970 ||sum <= -1150) {
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