module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/brightness-high": require('material-ui/svg-icons/device/brightness-high')
    }
  },
  name: "DeviceBrightnessHigh",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceBrightnessHigh",
        type: "Component"
      }
    }
  }
}