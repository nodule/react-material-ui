module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/label": require('material-ui/svg-icons/action/label')
    }
  },
  name: "ActionLabel",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionLabel",
        type: "Component"
      }
    }
  }
}