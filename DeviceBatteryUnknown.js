module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/battery-unknown": require('material-ui/svg-icons/device/battery-unknown')
    }
  },
  name: "DeviceBatteryUnknown",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceBatteryUnknown",
        type: "Component"
      }
    }
  }
}