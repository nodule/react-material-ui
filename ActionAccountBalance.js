module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/account-balance": require('material-ui/svg-icons/action/account-balance')
    }
  },
  name: "ActionAccountBalance",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionAccountBalance",
        type: "Component"
      }
    }
  }
}