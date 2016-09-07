module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/storage": require('material-ui/svg-icons/device/storage')
    }
  },
  name: "DeviceStorage",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceStorage",
        type: "Component"
      }
    }
  }
}