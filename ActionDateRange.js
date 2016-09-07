module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/date-range": require('material-ui/svg-icons/action/date-range')
    }
  },
  name: "ActionDateRange",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionDateRange",
        type: "Component"
      }
    }
  }
}