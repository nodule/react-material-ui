module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/music-note": require('material-ui/svg-icons/image/music-note')
    }
  },
  name: "ImageMusicNote",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageMusicNote",
        type: "Component"
      }
    }
  }
}