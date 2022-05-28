import reactive from "./reactive"
import pools from './pools'
import event from "./event"
import { render } from './render'

export function createApp (component) {
  const vm = {}

  const $data = component.data()
  const $template = component.template
  const $methods = component.methods

  vm.DOM = createDOM($template)

  const { propsPool, eventPool } = pools(vm.DOM, $methods)
  
  vm.mount = mount

  const init = () => {
    reactive(vm, $data, propsPool)
    event(vm, eventPool)
    render(vm, propsPool)
  }

  init()

  return vm
}

function createDOM (template) {
  const _c = document.createElement('div')
  _c.innerHTML = template

  return getFirstElementChild(_c)
}

function getFirstElementChild(node) {
  const childNodes = node.childNodes

  for (let i = 0; i < childNodes.length; i++) {
    let childNode = childNodes[i]
    if (childNode.nodeType === 1) {
      return childNode
    }
  }
}

function mount (el) {
  document.querySelector(el).appendChild(this.DOM)
}