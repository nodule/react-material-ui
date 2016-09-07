module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/video-label": require('material-ui/svg-icons/av/video-label')
    }
  },
  name: "AvVideoLabel",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvVideoLabel",
        type: "Component"
      }
    }
  }
}