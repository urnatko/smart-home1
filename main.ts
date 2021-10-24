let noise = 0
let light2 = 0
led.enable(false)
let strip = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
basic.forever(function () {
    light2 = smarthome.ReadLightIntensity(AnalogPin.P3)
    if (light2 < 50) {
        noise = smarthome.ReadNoise(AnalogPin.P2)
    } else {
        if (noise > 70) {
            strip.showColor(neopixel.colors(NeoPixelColors.White))
            basic.pause(1000)
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
        }
    }
})
