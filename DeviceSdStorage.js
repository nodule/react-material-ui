module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/sd-storage": require('material-ui/svg-icons/device/sd-storage')
    }
  },
  name: "DeviceSdStorage",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceSdStorage",
        type: "Component"
      }
    }
  }
}