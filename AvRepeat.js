module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/repeat": require('material-ui/svg-icons/av/repeat')
    }
  },
  name: "AvRepeat",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvRepeat",
        type: "Component"
      }
    }
  }
}