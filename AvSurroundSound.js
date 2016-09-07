module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/surround-sound": require('material-ui/svg-icons/av/surround-sound')
    }
  },
  name: "AvSurroundSound",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvSurroundSound",
        type: "Component"
      }
    }
  }
}