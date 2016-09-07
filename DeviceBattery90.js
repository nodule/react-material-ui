module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/battery-90": require('material-ui/svg-icons/device/battery-90')
    }
  },
  name: "DeviceBattery90",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceBattery90",
        type: "Component"
      }
    }
  }
}