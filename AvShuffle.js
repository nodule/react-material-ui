module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/shuffle": require('material-ui/svg-icons/av/shuffle')
    }
  },
  name: "AvShuffle",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvShuffle",
        type: "Component"
      }
    }
  }
}