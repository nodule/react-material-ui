module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/supervisor-account": require('material-ui/svg-icons/action/supervisor-account')
    }
  },
  name: "ActionSupervisorAccount",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionSupervisorAccount",
        type: "Component"
      }
    }
  }
}