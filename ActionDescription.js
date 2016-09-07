module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/description": require('material-ui/svg-icons/action/description')
    }
  },
  name: "ActionDescription",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionDescription",
        type: "Component"
      }
    }
  }
}