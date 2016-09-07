module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/alarm-on": require('material-ui/svg-icons/action/alarm-on')
    }
  },
  name: "ActionAlarmOn",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionAlarmOn",
        type: "Component"
      }
    }
  }
}