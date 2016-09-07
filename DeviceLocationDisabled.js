module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/location-disabled": require('material-ui/svg-icons/device/location-disabled')
    }
  },
  name: "DeviceLocationDisabled",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceLocationDisabled",
        type: "Component"
      }
    }
  }
}