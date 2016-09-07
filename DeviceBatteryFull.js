module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/battery-full": require('material-ui/svg-icons/device/battery-full')
    }
  },
  name: "DeviceBatteryFull",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceBatteryFull",
        type: "Component"
      }
    }
  }
}