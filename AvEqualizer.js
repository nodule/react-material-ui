module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/equalizer": require('material-ui/svg-icons/av/equalizer')
    }
  },
  name: "AvEqualizer",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvEqualizer",
        type: "Component"
      }
    }
  }
}