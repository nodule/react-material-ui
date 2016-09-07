module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/view-week": require('material-ui/svg-icons/action/view-week')
    }
  },
  name: "ActionViewWeek",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionViewWeek",
        type: "Component"
      }
    }
  }
}