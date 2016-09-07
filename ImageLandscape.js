module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/landscape": require('material-ui/svg-icons/image/landscape')
    }
  },
  name: "ImageLandscape",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageLandscape",
        type: "Component"
      }
    }
  }
}