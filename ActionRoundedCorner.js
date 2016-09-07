module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/rounded-corner": require('material-ui/svg-icons/action/rounded-corner')
    }
  },
  name: "ActionRoundedCorner",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionRoundedCorner",
        type: "Component"
      }
    }
  }
}