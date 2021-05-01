import type { buttonType } from "./types"
import buttons from "./buttons"
function createElement(labelName: string, attribute?: { [key: string]: string | undefined}) {
  const el: any = document.createElement(labelName)
  if (attribute) {
    for (const key in attribute) if (Object.hasOwnProperty.call(attribute, key)) {
      el[key] = attribute[key]
    }
  }
  return el
}

let beforeNumber: string, afterNumber: string, mark: string

const container = createElement('div', { id: 'container' })
document.body.appendChild(container)

const output = createElement('div', { className: 'output' })
const span = createElement('span', {
  textContent: '0',
  className: 'output-span'
})
output.appendChild(span)
container.appendChild(output)

container.addEventListener('click', (event: MouseEvent) => {
  console.log('event.target')
  console.log(event.target)
  if(event.target instanceof HTMLButtonElement) {
    const text = event.target.textContent;
    const el = event.target
    console.log("el.getAttribute('data-name')")
    console.log(el.getAttribute('data-name'))
    if ('0123456789'.indexOf(text) >= 0) {
      if (mark) {
        afterNumber = text
      } else {
        beforeNumber = text
      }
    } else if( [].indexOf(text))
  }
})

buttons.forEach((item: Array<buttonType>) => {
  const div = createElement('div', { className: 'row' })
  item.forEach((button: buttonType) => {
    const buttonEl = createElement('button', {
      className: `button text-${button.name}`,
      textContent: button.text
    })
    buttonEl.setAttribute('data-type', button.type);
    buttonEl.setAttribute('data-name', button.name);
    div.appendChild(buttonEl)
  })
  container.appendChild(div)
})
