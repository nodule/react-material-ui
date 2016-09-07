module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/dvr": require('material-ui/svg-icons/device/dvr')
    }
  },
  name: "DeviceDvr",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceDvr",
        type: "Component"
      }
    }
  }
}