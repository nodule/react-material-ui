module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/security": require('material-ui/svg-icons/hardware/security')
    }
  },
  name: "HardwareSecurity",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareSecurity",
        type: "Component"
      }
    }
  }
}