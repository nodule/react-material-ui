module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/payment": require('material-ui/svg-icons/action/payment')
    }
  },
  name: "ActionPayment",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionPayment",
        type: "Component"
      }
    }
  }
}