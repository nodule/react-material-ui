module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/speaker": require('material-ui/svg-icons/hardware/speaker')
    }
  },
  name: "HardwareSpeaker",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareSpeaker",
        type: "Component"
      }
    }
  }
}