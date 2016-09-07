module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/tune": require('material-ui/svg-icons/image/tune')
    }
  },
  name: "ImageTune",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageTune",
        type: "Component"
      }
    }
  }
}