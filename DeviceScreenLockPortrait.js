module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/screen-lock-portrait": require('material-ui/svg-icons/device/screen-lock-portrait')
    }
  },
  name: "DeviceScreenLockPortrait",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceScreenLockPortrait",
        type: "Component"
      }
    }
  }
}