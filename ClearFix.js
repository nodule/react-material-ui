module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/internal/ClearFix": require('material-ui/internal/ClearFix')
    }
  },
  name: "ClearFix",
  ports: {
    input: {
      children: {
        type: "node",
        name: "children"
      },
      style: {
        type: "object",
        name: "style"
      }
    },
    output: {
      component: {
        title: "ClearFix",
        type: "Component"
      }
    }
  }
}