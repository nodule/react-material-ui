module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/gps-not-fixed": require('material-ui/svg-icons/device/gps-not-fixed')
    }
  },
  name: "DeviceGpsNotFixed",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceGpsNotFixed",
        type: "Component"
      }
    }
  }
}