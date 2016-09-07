module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/access-time": require('material-ui/svg-icons/device/access-time')
    }
  },
  name: "DeviceAccessTime",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceAccessTime",
        type: "Component"
      }
    }
  }
}