module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/playlist-add-check": require('material-ui/svg-icons/av/playlist-add-check')
    }
  },
  name: "AvPlaylistAddCheck",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvPlaylistAddCheck",
        type: "Component"
      }
    }
  }
}