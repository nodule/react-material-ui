module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/video-call": require('material-ui/svg-icons/av/video-call')
    }
  },
  name: "AvVideoCall",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvVideoCall",
        type: "Component"
      }
    }
  }
}