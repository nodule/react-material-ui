module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/laptop-mac": require('material-ui/svg-icons/hardware/laptop-mac')
    }
  },
  name: "HardwareLaptopMac",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareLaptopMac",
        type: "Component"
      }
    }
  }
}