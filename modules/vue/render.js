import { vProps } from "./propsType"

const { vIf, vShow } = vProps

export function render (vm, propsPool) {
  const $data  = vm.$data

  for(let [node, info] of propsPool) {
    switch (info.type) {
      case vIf:
          info.comment = info.comment || document.createComment(vIf)
          !$data[info.prop] && node.parentNode.replaceChild(info.comment, node)
        break
      case vShow:
        !$data[info.prop] && (node.style.display = 'none')
        break
      default:
        break
    }
  }
}

export function update(vm, key, propsPool) {
  const $data = vm.$data

  for(let [node, info] of propsPool) {
    if (info.prop === key) {
      switch (info.type) {
        case vIf:
            !$data[info.prop] ? node.parentNode.replaceChild(info.comment, node)
                              : info.comment.parentNode.replaceChild(node, info.comment)
          break
        case vShow:
          !$data[info.prop] ? (node.style.display = 'none')
                            : (node.style.display = '')
          break
        default:
          break
      }
    }
  }
}