module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/nfc": require('material-ui/svg-icons/device/nfc')
    }
  },
  name: "DeviceNfc",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceNfc",
        type: "Component"
      }
    }
  }
}