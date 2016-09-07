module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/account-box": require('material-ui/svg-icons/action/account-box')
    }
  },
  name: "ActionAccountBox",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionAccountBox",
        type: "Component"
      }
    }
  }
}