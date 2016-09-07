module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/watch": require('material-ui/svg-icons/hardware/watch')
    }
  },
  name: "HardwareWatch",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareWatch",
        type: "Component"
      }
    }
  }
}