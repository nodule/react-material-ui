module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/brightness-low": require('material-ui/svg-icons/device/brightness-low')
    }
  },
  name: "DeviceBrightnessLow",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceBrightnessLow",
        type: "Component"
      }
    }
  }
}