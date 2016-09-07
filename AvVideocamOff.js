module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/videocam-off": require('material-ui/svg-icons/av/videocam-off')
    }
  },
  name: "AvVideocamOff",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvVideocamOff",
        type: "Component"
      }
    }
  }
}