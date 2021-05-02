import type { buttonObject } from './types';
import { buttonText } from './enum';
import buttons from './buttons';

class Calculator {
  public beforeNumber: string = ''
  public afterNumber: string = ''
  public mark: string =''
  public buttons = buttons
  public container: HTMLDivElement
  public span: HTMLSpanElement
  public numbers: (Array<string> | buttonText)  = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", buttonText.point]
  public operators: (Array<string> | buttonText) = [buttonText.add, buttonText.subtract, buttonText.multiply, buttonText.divide]
  public countMap: {[key: string]: Function} = {
    [buttonText.add]: (n1: number, n2: number) => this.filterZero(n1 + n2),
    [buttonText.subtract]: (n1: number, n2: number) => this.filterZero(n1 - n2),
    [buttonText.multiply]: (n1: number, n2: number) => this.filterZero(n1 * n2),
    [buttonText.divide]: (n1: number, n2: number) => this.filterZero(n1 / n2),
  }
  constructor() {
    this.createContainer()
    this.bindEvents()
  }
  // 过滤末尾的 0
  filterZero(text: number) {
    const result = text.toPrecision(12).toString()
    return Number(result)
  }
  createElement(labelName: string, attribute?: { [key: string]: string | undefined}) {
    const el: any = document.createElement(labelName)
    if (attribute) {
      for (const key in attribute) if (Object.hasOwnProperty.call(attribute, key)) {
        el[key] = attribute[key]
      }
    }
    return el
  }
  bindEvents() {
    this.container.addEventListener('click', (event: MouseEvent) => {
      if(event.target instanceof HTMLButtonElement) {
        const name = event.target.getAttribute('data-name')
        if (this.numbers.indexOf(name) >= 0) {
          this.saveNumber(event.target.textContent)
        } else if (this.operators.indexOf(name) >= 0) {
          this.mark = name
        } else if (name === buttonText.equal) {
          this.calcResult()
        } else if (name === buttonText.clear) {
          this.clearData()
        }
      }
    })
  }
  // 存储数字
  saveNumber(text: string) {
    if (this.mark) {
      if(text === '.' && !this.afterNumber) { this.afterNumber = '0' }
      this.afterNumber += text
      this.span.textContent = this.afterNumber
    } else {
      if(text === '.' && !this.beforeNumber) { this.beforeNumber = '0' }
      this.beforeNumber += text
      this.span.textContent = this.beforeNumber
    }
  }
  // 计算结果
  calcResult() {
    if(!this.mark) {
      return false
    }
    const n1 = parseFloat(this.beforeNumber) || 0
    const n2 = parseFloat(this.afterNumber) || 0
    const result = this.countMap[this.mark](n1, n2).toString()
    this.span.textContent = result

    this.beforeNumber = result
    this.afterNumber = ''
    this.mark = ''
  }
  clearData() {
    this.afterNumber = ''
    this.beforeNumber = ''
    this.mark = ''
    this.span.textContent = '0'
  }
  createContainer() {
    // 创建外部容器
    this.container = this.createElement('div', { id: 'container' })
    document.body.appendChild(this.container)

    // 创建数字显示
    const output = this.createElement('div', { className: 'output' })
    this.span = this.createElement('span', {
      textContent: '0',
      className: 'output-span'
    })
    output.appendChild(this.span)
    this.container.appendChild(output)

    // 创建操作按钮
    this.buttons.forEach((item: Array<buttonObject>) => {
      const div = this.createElement('div', { className: 'row' })
      item.forEach((button: buttonObject) => {
        const buttonEl = this.createElement('button', {
          className: `button text-${button.name}`,
          textContent: button.text
        })
        buttonEl.setAttribute('data-type', button.type);
        buttonEl.setAttribute('data-name', button.name);
        div.appendChild(buttonEl)
      })
      this.container.appendChild(div)
    })
  }
}

new Calculator()
