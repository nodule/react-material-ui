module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/gps-fixed": require('material-ui/svg-icons/device/gps-fixed')
    }
  },
  name: "DeviceGpsFixed",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceGpsFixed",
        type: "Component"
      }
    }
  }
}