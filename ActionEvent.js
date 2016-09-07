module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/event": require('material-ui/svg-icons/action/event')
    }
  },
  name: "ActionEvent",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionEvent",
        type: "Component"
      }
    }
  }
}