module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/dock": require('material-ui/svg-icons/hardware/dock')
    }
  },
  name: "HardwareDock",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareDock",
        type: "Component"
      }
    }
  }
}