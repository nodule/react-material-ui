module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/data-usage": require('material-ui/svg-icons/device/data-usage')
    }
  },
  name: "DeviceDataUsage",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceDataUsage",
        type: "Component"
      }
    }
  }
}