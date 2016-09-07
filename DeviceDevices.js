module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/devices": require('material-ui/svg-icons/device/devices')
    }
  },
  name: "DeviceDevices",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceDevices",
        type: "Component"
      }
    }
  }
}