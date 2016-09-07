module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/alarm": require('material-ui/svg-icons/action/alarm')
    }
  },
  name: "ActionAlarm",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionAlarm",
        type: "Component"
      }
    }
  }
}