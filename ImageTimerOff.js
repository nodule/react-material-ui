module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/timer-off": require('material-ui/svg-icons/image/timer-off')
    }
  },
  name: "ImageTimerOff",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageTimerOff",
        type: "Component"
      }
    }
  }
}