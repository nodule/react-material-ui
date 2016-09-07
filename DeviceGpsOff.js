module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/gps-off": require('material-ui/svg-icons/device/gps-off')
    }
  },
  name: "DeviceGpsOff",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceGpsOff",
        type: "Component"
      }
    }
  }
}