module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/cast": require('material-ui/svg-icons/hardware/cast')
    }
  },
  name: "HardwareCast",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareCast",
        type: "Component"
      }
    }
  }
}