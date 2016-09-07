module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/playlist-play": require('material-ui/svg-icons/av/playlist-play')
    }
  },
  name: "AvPlaylistPlay",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvPlaylistPlay",
        type: "Component"
      }
    }
  }
}