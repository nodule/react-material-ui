module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/turned-in": require('material-ui/svg-icons/action/turned-in')
    }
  },
  name: "ActionTurnedIn",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionTurnedIn",
        type: "Component"
      }
    }
  }
}