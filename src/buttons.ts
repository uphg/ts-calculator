import type { buttonType } from "./types"
import { buttonText } from "./enum"

const createData = (name: string, type: string = 'number', text: string = name): buttonType => ({ name, type, text })

const buttons: Array<Array<buttonType>> = [
  [
    createData(buttonText.clear, 'operator', 'Clear'),
    createData(buttonText.divide, 'operator', '÷'),
  ],
  [
    createData('7'),
    createData('8'),
    createData('9'),
    createData(buttonText.multiply, 'operator', '×'),
  ],
  [
    createData('4'),
    createData('5'),
    createData('6'),
    createData(buttonText.subtract, 'operator', '-'),
  ],
  [
    createData('1'),
    createData('2'),
    createData('3'),
    createData(buttonText.add, 'operator', '+'),
  ],
  [
    createData('0'),
    createData(buttonText.point, 'number', '.'),
    createData(buttonText.equal, 'operator', '='),
  ]
]

export default buttons
