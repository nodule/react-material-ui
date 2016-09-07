module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/speaker-group": require('material-ui/svg-icons/hardware/speaker-group')
    }
  },
  name: "HardwareSpeakerGroup",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareSpeakerGroup",
        type: "Component"
      }
    }
  }
}