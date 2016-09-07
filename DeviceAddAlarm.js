module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/add-alarm": require('material-ui/svg-icons/device/add-alarm')
    }
  },
  name: "DeviceAddAlarm",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceAddAlarm",
        type: "Component"
      }
    }
  }
}