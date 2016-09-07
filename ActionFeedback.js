module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/feedback": require('material-ui/svg-icons/action/feedback')
    }
  },
  name: "ActionFeedback",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionFeedback",
        type: "Component"
      }
    }
  }
}