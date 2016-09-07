module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/code": require('material-ui/svg-icons/action/code')
    }
  },
  name: "ActionCode",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionCode",
        type: "Component"
      }
    }
  }
}