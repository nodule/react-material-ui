module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/motorcycle": require('material-ui/svg-icons/action/motorcycle')
    }
  },
  name: "ActionMotorcycle",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionMotorcycle",
        type: "Component"
      }
    }
  }
}