module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/cast-connected": require('material-ui/svg-icons/hardware/cast-connected')
    }
  },
  name: "HardwareCastConnected",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareCastConnected",
        type: "Component"
      }
    }
  }
}