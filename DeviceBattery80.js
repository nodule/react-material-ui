module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/battery-80": require('material-ui/svg-icons/device/battery-80')
    }
  },
  name: "DeviceBattery80",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceBattery80",
        type: "Component"
      }
    }
  }
}