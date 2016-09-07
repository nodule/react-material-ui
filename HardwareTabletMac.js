module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/tablet-mac": require('material-ui/svg-icons/hardware/tablet-mac')
    }
  },
  name: "HardwareTabletMac",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareTabletMac",
        type: "Component"
      }
    }
  }
}