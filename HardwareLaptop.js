module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/laptop": require('material-ui/svg-icons/hardware/laptop')
    }
  },
  name: "HardwareLaptop",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareLaptop",
        type: "Component"
      }
    }
  }
}