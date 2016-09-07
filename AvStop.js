module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/stop": require('material-ui/svg-icons/av/stop')
    }
  },
  name: "AvStop",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvStop",
        type: "Component"
      }
    }
  }
}