module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/toys": require('material-ui/svg-icons/hardware/toys')
    }
  },
  name: "HardwareToys",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareToys",
        type: "Component"
      }
    }
  }
}