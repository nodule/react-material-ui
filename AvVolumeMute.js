module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/volume-mute": require('material-ui/svg-icons/av/volume-mute')
    }
  },
  name: "AvVolumeMute",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvVolumeMute",
        type: "Component"
      }
    }
  }
}