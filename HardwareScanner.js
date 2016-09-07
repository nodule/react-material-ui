module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/scanner": require('material-ui/svg-icons/hardware/scanner')
    }
  },
  name: "HardwareScanner",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareScanner",
        type: "Component"
      }
    }
  }
}