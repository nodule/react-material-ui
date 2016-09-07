module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/class": require('material-ui/svg-icons/action/class')
    }
  },
  name: "ActionClass",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionClass",
        type: "Component"
      }
    }
  }
}