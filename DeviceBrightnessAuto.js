module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/brightness-auto": require('material-ui/svg-icons/device/brightness-auto')
    }
  },
  name: "DeviceBrightnessAuto",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceBrightnessAuto",
        type: "Component"
      }
    }
  }
}