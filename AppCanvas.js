module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/internal/AppCanvas": require('material-ui/internal/AppCanvas')
    }
  },
  name: "AppCanvas",
  ports: {
    input: {
      children: {
        type: "array",
        propType: "node",
        name: "children",
        required: false
      }
    },
    output: {
      component: {
        title: "AppCanvas",
        type: "Component"
      }
    }
  }
}