module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/schedule": require('material-ui/svg-icons/action/schedule')
    }
  },
  name: "ActionSchedule",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionSchedule",
        type: "Component"
      }
    }
  }
}