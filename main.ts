input.onButtonPressed(Button.A, function () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 150)
    motor.motorStop(motor.Motors.M2)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    motor.motorStopAll()
})
input.onButtonPressed(Button.B, function () {
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 150)
    motor.motorStop(motor.Motors.M1)
})
motor.motorStopAll()
