makerbit.onIrButton(IrButton.Number_3, IrButtonAction.Pressed, function () {
    basic.showNumber(3)
})
makerbit.onIrButton(IrButton.Number_8, IrButtonAction.Pressed, function () {
    basic.showNumber(8)
})
makerbit.onIrButton(IrButton.Star, IrButtonAction.Pressed, function () {
    basic.showNumber(0)
})
makerbit.onIrButton(IrButton.Number_1, IrButtonAction.Pressed, function () {
    basic.showNumber(1)
})
makerbit.onIrButton(IrButton.Number_4, IrButtonAction.Pressed, function () {
    basic.showNumber(4)
})
makerbit.onIrButton(IrButton.Number_5, IrButtonAction.Pressed, function () {
    basic.showNumber(5)
})
makerbit.onIrButton(IrButton.On, IrButtonAction.Pressed, function () {
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
    basic.showString("")
})
makerbit.onIrButton(IrButton.Number_6, IrButtonAction.Pressed, function () {
    basic.showNumber(6)
})
makerbit.onIrButton(IrButton.Number_7, IrButtonAction.Pressed, function () {
    basic.showNumber(7)
})
makerbit.onIrButton(IrButton.Number_2, IrButtonAction.Pressed, function () {
    basic.showNumber(2)
})
makerbit.onIrButton(IrButton.Number_9, IrButtonAction.Pressed, function () {
    basic.showNumber(9)
})
makerbit.connectIrReceiver(DigitalPin.P2)
