module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/fast-forward": require('material-ui/svg-icons/av/fast-forward')
    }
  },
  name: "AvFastForward",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvFastForward",
        type: "Component"
      }
    }
  }
}