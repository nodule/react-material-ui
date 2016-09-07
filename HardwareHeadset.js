module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/headset": require('material-ui/svg-icons/hardware/headset')
    }
  },
  name: "HardwareHeadset",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareHeadset",
        type: "Component"
      }
    }
  }
}