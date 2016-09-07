module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/videocam": require('material-ui/svg-icons/av/videocam')
    }
  },
  name: "AvVideocam",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvVideocam",
        type: "Component"
      }
    }
  }
}