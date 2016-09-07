module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/assessment": require('material-ui/svg-icons/action/assessment')
    }
  },
  name: "ActionAssessment",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionAssessment",
        type: "Component"
      }
    }
  }
}