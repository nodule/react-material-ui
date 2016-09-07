module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/volume-up": require('material-ui/svg-icons/av/volume-up')
    }
  },
  name: "AvVolumeUp",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvVolumeUp",
        type: "Component"
      }
    }
  }
}