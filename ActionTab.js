module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/tab": require('material-ui/svg-icons/action/tab')
    }
  },
  name: "ActionTab",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionTab",
        type: "Component"
      }
    }
  }
}