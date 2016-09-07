module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/network-cell": require('material-ui/svg-icons/device/network-cell')
    }
  },
  name: "DeviceNetworkCell",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceNetworkCell",
        type: "Component"
      }
    }
  }
}