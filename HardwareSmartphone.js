module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/smartphone": require('material-ui/svg-icons/hardware/smartphone')
    }
  },
  name: "HardwareSmartphone",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareSmartphone",
        type: "Component"
      }
    }
  }
}