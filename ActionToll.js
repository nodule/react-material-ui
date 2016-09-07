module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/toll": require('material-ui/svg-icons/action/toll')
    }
  },
  name: "ActionToll",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionToll",
        type: "Component"
      }
    }
  }
}