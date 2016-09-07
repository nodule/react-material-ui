module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/skip-next": require('material-ui/svg-icons/av/skip-next')
    }
  },
  name: "AvSkipNext",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvSkipNext",
        type: "Component"
      }
    }
  }
}