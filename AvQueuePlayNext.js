module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/queue-play-next": require('material-ui/svg-icons/av/queue-play-next')
    }
  },
  name: "AvQueuePlayNext",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvQueuePlayNext",
        type: "Component"
      }
    }
  }
}