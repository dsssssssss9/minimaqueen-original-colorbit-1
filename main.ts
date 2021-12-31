input.onButtonPressed(Button.A, function () {
    colorbit_51bit.clear()
    colorbit_51bit.showScrollStringColor("Test", colorbit.colors(BitColors.Red))
    colorbit_51bit.show()
})
let colorbit_51bit: colorbit.Strip = null
colorbit_51bit = colorbit.initColorBit(DigitalPin.P1, BitColorMode.RGB)
colorbit_51bit.clear()
colorbit_51bit.setBrightness(16)
colorbit_51bit.showColorIcon(ColorIcon.ChristmasTree, colorbit.colors(BitColors.Red))
basic.forever(function () {
	
})
