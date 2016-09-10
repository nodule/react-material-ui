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
        type: "array",
        propType: "node",
        name: "children",
        required: false
      },
      style: {
        type: "object",
        name: "style",
        required: false
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