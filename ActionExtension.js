module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/extension": require('material-ui/svg-icons/action/extension')
    }
  },
  name: "ActionExtension",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionExtension",
        type: "Component"
      }
    }
  }
}