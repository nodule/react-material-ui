module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/battery-charging-full": require('material-ui/svg-icons/device/battery-charging-full')
    }
  },
  name: "DeviceBatteryChargingFull",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceBatteryChargingFull",
        type: "Component"
      }
    }
  }
}