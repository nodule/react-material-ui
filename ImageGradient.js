module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/gradient": require('material-ui/svg-icons/image/gradient')
    }
  },
  name: "ImageGradient",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageGradient",
        type: "Component"
      }
    }
  }
}