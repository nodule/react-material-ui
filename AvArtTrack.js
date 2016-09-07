module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/art-track": require('material-ui/svg-icons/av/art-track')
    }
  },
  name: "AvArtTrack",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvArtTrack",
        type: "Component"
      }
    }
  }
}