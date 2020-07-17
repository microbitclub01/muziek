input.onButtonPressed(Button.A, function () {
    if (index == true) {
        music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.ForeverInBackground)
        index = false
    } else {
        music.stopMelody(MelodyStopOptions.Background)
        index = true
    }
})
let index = false
index = true
