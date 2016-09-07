module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/battery-30": require('material-ui/svg-icons/device/battery-30')
    }
  },
  name: "DeviceBattery30",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceBattery30",
        type: "Component"
      }
    }
  }
}