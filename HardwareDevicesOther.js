module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/devices-other": require('material-ui/svg-icons/hardware/devices-other')
    }
  },
  name: "HardwareDevicesOther",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareDevicesOther",
        type: "Component"
      }
    }
  }
}