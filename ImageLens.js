module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/lens": require('material-ui/svg-icons/image/lens')
    }
  },
  name: "ImageLens",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageLens",
        type: "Component"
      }
    }
  }
}