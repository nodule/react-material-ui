module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/desktop-windows": require('material-ui/svg-icons/hardware/desktop-windows')
    }
  },
  name: "HardwareDesktopWindows",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareDesktopWindows",
        type: "Component"
      }
    }
  }
}