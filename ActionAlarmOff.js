module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/alarm-off": require('material-ui/svg-icons/action/alarm-off')
    }
  },
  name: "ActionAlarmOff",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionAlarmOff",
        type: "Component"
      }
    }
  }
}