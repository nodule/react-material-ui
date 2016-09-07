module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/location-searching": require('material-ui/svg-icons/device/location-searching')
    }
  },
  name: "DeviceLocationSearching",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceLocationSearching",
        type: "Component"
      }
    }
  }
}