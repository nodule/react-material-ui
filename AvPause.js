module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/pause": require('material-ui/svg-icons/av/pause')
    }
  },
  name: "AvPause",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvPause",
        type: "Component"
      }
    }
  }
}