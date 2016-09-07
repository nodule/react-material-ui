module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/tv": require('material-ui/svg-icons/hardware/tv')
    }
  },
  name: "HardwareTv",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareTv",
        type: "Component"
      }
    }
  }
}