module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/update": require('material-ui/svg-icons/action/update')
    }
  },
  name: "ActionUpdate",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionUpdate",
        type: "Component"
      }
    }
  }
}