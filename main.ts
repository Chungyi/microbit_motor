input.onButtonPressed(Button.A, function () {
    motor.servo(motor.Servos.S8, 30)
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 80)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 100)
})
input.onButtonPressed(Button.B, function () {
    motor.servo(motor.Servos.S8, 150)
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 100)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 150)
})
motor.motorStopAll()
motor.servo(motor.Servos.S8, 0)
