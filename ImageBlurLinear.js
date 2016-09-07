module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/blur-linear": require('material-ui/svg-icons/image/blur-linear')
    }
  },
  name: "ImageBlurLinear",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageBlurLinear",
        type: "Component"
      }
    }
  }
}