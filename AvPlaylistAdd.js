module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/playlist-add": require('material-ui/svg-icons/av/playlist-add')
    }
  },
  name: "AvPlaylistAdd",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvPlaylistAdd",
        type: "Component"
      }
    }
  }
}