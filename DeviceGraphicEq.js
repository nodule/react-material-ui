module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/graphic-eq": require('material-ui/svg-icons/device/graphic-eq')
    }
  },
  name: "DeviceGraphicEq",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceGraphicEq",
        type: "Component"
      }
    }
  }
}