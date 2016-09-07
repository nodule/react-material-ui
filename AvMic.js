module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/mic": require('material-ui/svg-icons/av/mic')
    }
  },
  name: "AvMic",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvMic",
        type: "Component"
      }
    }
  }
}