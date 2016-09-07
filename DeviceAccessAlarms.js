module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/access-alarms": require('material-ui/svg-icons/device/access-alarms')
    }
  },
  name: "DeviceAccessAlarms",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceAccessAlarms",
        type: "Component"
      }
    }
  }
}