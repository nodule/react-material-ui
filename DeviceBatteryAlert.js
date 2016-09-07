module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/battery-alert": require('material-ui/svg-icons/device/battery-alert')
    }
  },
  name: "DeviceBatteryAlert",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceBatteryAlert",
        type: "Component"
      }
    }
  }
}