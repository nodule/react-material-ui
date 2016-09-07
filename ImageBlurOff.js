module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/blur-off": require('material-ui/svg-icons/image/blur-off')
    }
  },
  name: "ImageBlurOff",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageBlurOff",
        type: "Component"
      }
    }
  }
}