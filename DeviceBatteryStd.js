module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/battery-std": require('material-ui/svg-icons/device/battery-std')
    }
  },
  name: "DeviceBatteryStd",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceBatteryStd",
        type: "Component"
      }
    }
  }
}