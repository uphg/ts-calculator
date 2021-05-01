import type { buttonType } from "./types"

const createData = (name: string, type: string = 'number', text: string = name): buttonType => ({ name, type, text })

const buttons: Array<Array<buttonType>> = [
  [
    createData('clear', 'operator', 'Clear'),
    createData('divide', 'operator', '÷'),
  ],
  [
    createData('7'),
    createData('8'),
    createData('9'),
    createData('multiply', 'operator', '×'),
  ],
  [
    createData('4'),
    createData('5'),
    createData('6'),
    createData('subtract', 'operator', '-'),
  ],
  [
    createData('1'),
    createData('2'),
    createData('3'),
    createData('add', 'operator', '+'),
  ],
  [
    createData('0'),
    createData('point', 'number', '.'),
    createData('equal', 'operator', '='),
  ]
]

export default buttons
