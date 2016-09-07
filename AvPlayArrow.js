module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/play-arrow": require('material-ui/svg-icons/av/play-arrow')
    }
  },
  name: "AvPlayArrow",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvPlayArrow",
        type: "Component"
      }
    }
  }
}