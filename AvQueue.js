module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/queue": require('material-ui/svg-icons/av/queue')
    }
  },
  name: "AvQueue",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvQueue",
        type: "Component"
      }
    }
  }
}