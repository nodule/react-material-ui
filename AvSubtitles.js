module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/subtitles": require('material-ui/svg-icons/av/subtitles')
    }
  },
  name: "AvSubtitles",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvSubtitles",
        type: "Component"
      }
    }
  }
}