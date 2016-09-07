module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/network-wifi": require('material-ui/svg-icons/device/network-wifi')
    }
  },
  name: "DeviceNetworkWifi",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceNetworkWifi",
        type: "Component"
      }
    }
  }
}