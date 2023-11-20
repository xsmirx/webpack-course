import {PluginItem} from '@babel/core'

export function removeDataTestIdBavelPlugin(): PluginItem {
  return {
    visitor: {
      Program(path, state) {
        const forbddenProps: string[] = state.opts.props || []

        path.traverse({
          JSXIdentifier(current) {
            const nodeName = current.node.name
            if (forbddenProps.includes(nodeName)) {
              current.parentPath.remove()
            }
          },
        })
      },
    },
  }
}
