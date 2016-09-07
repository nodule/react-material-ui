module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/memory": require('material-ui/svg-icons/hardware/memory')
    }
  },
  name: "HardwareMemory",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareMemory",
        type: "Component"
      }
    }
  }
}