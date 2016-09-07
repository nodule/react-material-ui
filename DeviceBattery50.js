module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/battery-50": require('material-ui/svg-icons/device/battery-50')
    }
  },
  name: "DeviceBattery50",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceBattery50",
        type: "Component"
      }
    }
  }
}