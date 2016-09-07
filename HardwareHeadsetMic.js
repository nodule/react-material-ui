module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/headset-mic": require('material-ui/svg-icons/hardware/headset-mic')
    }
  },
  name: "HardwareHeadsetMic",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareHeadsetMic",
        type: "Component"
      }
    }
  }
}