module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/access-alarm": require('material-ui/svg-icons/device/access-alarm')
    }
  },
  name: "DeviceAccessAlarm",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceAccessAlarm",
        type: "Component"
      }
    }
  }
}