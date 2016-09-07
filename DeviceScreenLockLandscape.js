module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/screen-lock-landscape": require('material-ui/svg-icons/device/screen-lock-landscape')
    }
  },
  name: "DeviceScreenLockLandscape",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceScreenLockLandscape",
        type: "Component"
      }
    }
  }
}