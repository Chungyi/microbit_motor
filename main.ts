input.onButtonPressed(Button.A, function () {
    motor.servo(motor.Servos.S8, 90)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    motor.servo(motor.Servos.S8, 0)
})
input.onButtonPressed(Button.B, function () {
    motor.servo(motor.Servos.S8, 180)
})
motor.motorStopAll()
