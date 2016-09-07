module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/rowing": require('material-ui/svg-icons/action/rowing')
    }
  },
  name: "ActionRowing",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionRowing",
        type: "Component"
      }
    }
  }
}