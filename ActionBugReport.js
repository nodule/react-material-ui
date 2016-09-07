module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/bug-report": require('material-ui/svg-icons/action/bug-report')
    }
  },
  name: "ActionBugReport",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionBugReport",
        type: "Component"
      }
    }
  }
}