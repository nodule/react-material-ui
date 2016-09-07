module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/blur-circular": require('material-ui/svg-icons/image/blur-circular')
    }
  },
  name: "ImageBlurCircular",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageBlurCircular",
        type: "Component"
      }
    }
  }
}