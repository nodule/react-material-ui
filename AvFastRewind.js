module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/fast-rewind": require('material-ui/svg-icons/av/fast-rewind')
    }
  },
  name: "AvFastRewind",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvFastRewind",
        type: "Component"
      }
    }
  }
}