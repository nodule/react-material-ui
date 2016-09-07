module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/turned-in-not": require('material-ui/svg-icons/action/turned-in-not')
    }
  },
  name: "ActionTurnedInNot",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionTurnedInNot",
        type: "Component"
      }
    }
  }
}