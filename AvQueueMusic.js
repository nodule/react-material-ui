module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/queue-music": require('material-ui/svg-icons/av/queue-music')
    }
  },
  name: "AvQueueMusic",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvQueueMusic",
        type: "Component"
      }
    }
  }
}