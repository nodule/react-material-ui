module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/account-circle": require('material-ui/svg-icons/action/account-circle')
    }
  },
  name: "ActionAccountCircle",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionAccountCircle",
        type: "Component"
      }
    }
  }
}