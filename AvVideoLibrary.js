module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/video-library": require('material-ui/svg-icons/av/video-library')
    }
  },
  name: "AvVideoLibrary",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvVideoLibrary",
        type: "Component"
      }
    }
  }
}