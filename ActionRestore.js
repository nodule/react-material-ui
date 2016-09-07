module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/restore": require('material-ui/svg-icons/action/restore')
    }
  },
  name: "ActionRestore",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionRestore",
        type: "Component"
      }
    }
  }
}