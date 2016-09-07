module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/mic-off": require('material-ui/svg-icons/av/mic-off')
    }
  },
  name: "AvMicOff",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvMicOff",
        type: "Component"
      }
    }
  }
}