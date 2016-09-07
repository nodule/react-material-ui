module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/widgets": require('material-ui/svg-icons/device/widgets')
    }
  },
  name: "DeviceWidgets",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceWidgets",
        type: "Component"
      }
    }
  }
}