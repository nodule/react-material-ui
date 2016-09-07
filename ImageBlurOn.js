module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/blur-on": require('material-ui/svg-icons/image/blur-on')
    }
  },
  name: "ImageBlurOn",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageBlurOn",
        type: "Component"
      }
    }
  }
}