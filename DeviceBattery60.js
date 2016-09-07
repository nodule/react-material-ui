module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/battery-60": require('material-ui/svg-icons/device/battery-60')
    }
  },
  name: "DeviceBattery60",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceBattery60",
        type: "Component"
      }
    }
  }
}