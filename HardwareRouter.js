module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/router": require('material-ui/svg-icons/hardware/router')
    }
  },
  name: "HardwareRouter",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareRouter",
        type: "Component"
      }
    }
  }
}