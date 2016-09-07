module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/check-circle": require('material-ui/svg-icons/action/check-circle')
    }
  },
  name: "ActionCheckCircle",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionCheckCircle",
        type: "Component"
      }
    }
  }
}