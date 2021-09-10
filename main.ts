input.onButtonPressed(Button.A, function () {
    if (轉速段數 < 3) {
        轉速段數 += 1
        basic.showNumber(轉速段數)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 50 + (轉速段數 - 1) * 100)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    motor.motorStopAll()
    basic.showNumber(0)
    轉速段數 = 0
})
input.onButtonPressed(Button.B, function () {
    if (轉速段數 > 1) {
        轉速段數 += -1
        basic.showNumber(轉速段數)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 50 + (轉速段數 - 1) * 100)
    }
})
let 轉速段數 = 0
motor.motorStopAll()
basic.showNumber(0)
轉速段數 = 0
