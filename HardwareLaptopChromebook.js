module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/laptop-chromebook": require('material-ui/svg-icons/hardware/laptop-chromebook')
    }
  },
  name: "HardwareLaptopChromebook",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareLaptopChromebook",
        type: "Component"
      }
    }
  }
}