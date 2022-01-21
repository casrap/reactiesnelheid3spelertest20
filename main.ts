input.onButtonPressed(Button.B, function () {
    if (KLIK == 1) {
        radio.sendString("a")
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        score += 1
        KLIK = 0
    } else {
        score += -1
    }
})
let score = 0
let KLIK = 0
radio.setGroup(148)
KLIK = 0
basic.forever(function () {
    basic.pause(randint(2000, 5000))
    radio.sendNumber(0)
    KLIK = 1
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
