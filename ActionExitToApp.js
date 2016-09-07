module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/exit-to-app": require('material-ui/svg-icons/action/exit-to-app')
    }
  },
  name: "ActionExitToApp",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionExitToApp",
        type: "Component"
      }
    }
  }
}