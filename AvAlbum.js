module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/album": require('material-ui/svg-icons/av/album')
    }
  },
  name: "AvAlbum",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvAlbum",
        type: "Component"
      }
    }
  }
}