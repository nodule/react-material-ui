module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/audiotrack": require('material-ui/svg-icons/image/audiotrack')
    }
  },
  name: "ImageAudiotrack",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageAudiotrack",
        type: "Component"
      }
    }
  }
}