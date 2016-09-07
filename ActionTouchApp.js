module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/touch-app": require('material-ui/svg-icons/action/touch-app')
    }
  },
  name: "ActionTouchApp",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionTouchApp",
        type: "Component"
      }
    }
  }
}