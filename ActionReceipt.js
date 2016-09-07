module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/receipt": require('material-ui/svg-icons/action/receipt')
    }
  },
  name: "ActionReceipt",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionReceipt",
        type: "Component"
      }
    }
  }
}