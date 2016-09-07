module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/desktop-mac": require('material-ui/svg-icons/hardware/desktop-mac')
    }
  },
  name: "HardwareDesktopMac",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareDesktopMac",
        type: "Component"
      }
    }
  }
}