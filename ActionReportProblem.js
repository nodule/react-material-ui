module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/report-problem": require('material-ui/svg-icons/action/report-problem')
    }
  },
  name: "ActionReportProblem",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionReportProblem",
        type: "Component"
      }
    }
  }
}