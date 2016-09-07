module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/backspace": require('material-ui/svg-icons/content/backspace')
    }
  },
  name: "ContentBackspace",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentBackspace",
        type: "Component"
      }
    }
  }
}