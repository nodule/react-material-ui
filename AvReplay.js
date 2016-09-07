module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/replay": require('material-ui/svg-icons/av/replay')
    }
  },
  name: "AvReplay",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvReplay",
        type: "Component"
      }
    }
  }
}