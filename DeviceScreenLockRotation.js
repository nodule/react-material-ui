module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/screen-lock-rotation": require('material-ui/svg-icons/device/screen-lock-rotation')
    }
  },
  name: "DeviceScreenLockRotation",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceScreenLockRotation",
        type: "Component"
      }
    }
  }
}