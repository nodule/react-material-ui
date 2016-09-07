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
        type: "node",
        name: "children"
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