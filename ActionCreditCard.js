module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/credit-card": require('material-ui/svg-icons/action/credit-card')
    }
  },
  name: "ActionCreditCard",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionCreditCard",
        type: "Component"
      }
    }
  }
}