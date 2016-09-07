module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/device-hub": require('material-ui/svg-icons/hardware/device-hub')
    }
  },
  name: "HardwareDeviceHub",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareDeviceHub",
        type: "Component"
      }
    }
  }
}