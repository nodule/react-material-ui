module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/usb": require('material-ui/svg-icons/device/usb')
    }
  },
  name: "DeviceUsb",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceUsb",
        type: "Component"
      }
    }
  }
}