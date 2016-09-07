module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/alarm-add": require('material-ui/svg-icons/action/alarm-add')
    }
  },
  name: "ActionAlarmAdd",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionAlarmAdd",
        type: "Component"
      }
    }
  }
}