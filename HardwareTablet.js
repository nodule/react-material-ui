module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/tablet": require('material-ui/svg-icons/hardware/tablet')
    }
  },
  name: "HardwareTablet",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareTablet",
        type: "Component"
      }
    }
  }
}