module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/music-video": require('material-ui/svg-icons/av/music-video')
    }
  },
  name: "AvMusicVideo",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvMusicVideo",
        type: "Component"
      }
    }
  }
}