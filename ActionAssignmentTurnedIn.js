module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/assignment-turned-in": require('material-ui/svg-icons/action/assignment-turned-in')
    }
  },
  name: "ActionAssignmentTurnedIn",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionAssignmentTurnedIn",
        type: "Component"
      }
    }
  }
}