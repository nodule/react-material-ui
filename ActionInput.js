module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/input": require('material-ui/svg-icons/action/input')
    }
  },
  name: "ActionInput",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionInput",
        type: "Component"
      }
    }
  }
}