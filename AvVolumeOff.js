module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/volume-off": require('material-ui/svg-icons/av/volume-off')
    }
  },
  name: "AvVolumeOff",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvVolumeOff",
        type: "Component"
      }
    }
  }
}