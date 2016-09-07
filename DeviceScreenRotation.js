module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/screen-rotation": require('material-ui/svg-icons/device/screen-rotation')
    }
  },
  name: "DeviceScreenRotation",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceScreenRotation",
        type: "Component"
      }
    }
  }
}