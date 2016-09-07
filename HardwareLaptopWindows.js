module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/laptop-windows": require('material-ui/svg-icons/hardware/laptop-windows')
    }
  },
  name: "HardwareLaptopWindows",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareLaptopWindows",
        type: "Component"
      }
    }
  }
}