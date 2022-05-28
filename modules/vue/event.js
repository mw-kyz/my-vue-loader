export default function event(vm, eventPool) {
  for (let [node, info] of eventPool) {
    vm[info.handler.name] = info.handler

    node.addEventListener(info.type, vm[info.handler.name].bind(vm), false)
  }
}