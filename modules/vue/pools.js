import { vProps, vEvents } from "./propsType"

export default function pools (dom, methods) {
  const propsPool = new Map()
  const eventPool = new Map()
  const allNodes = dom.getElementsByTagName('*')
  const { vIf, vShow } = vProps
  const { vClick } = vEvents

  let node = null

  for (let i = 0; i < allNodes.length; i++) {
    node = allNodes[i]

    const vIfVal = node.getAttribute(vIf)
    const vShowVal = node.getAttribute(vShow)
    const vClickVal = node.getAttribute(`@${ vClick }`)

    if (vIfVal) {
      propsPool.set(node, {
        type: vIf,
        prop: vIfVal
      })

      node.removeAttribute(vIf)
    }

    if (vShowVal) {
      propsPool.set(node, {
        type: vShow,
        prop: vShowVal
      })

      node.removeAttribute(vShow)
    }

    if (vClickVal) {
      eventPool.set(node, {
        type: vClick,
        handler: methods[vClickVal]
      })

      node.removeAttribute(`@${ vClick }`)
    }
  }
  
  return {
    propsPool,
    eventPool
  }
}