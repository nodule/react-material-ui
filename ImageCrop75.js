module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/crop-7-5": require('material-ui/svg-icons/image/crop-7-5')
    }
  },
  name: "ImageCrop75",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageCrop75",
        type: "Component"
      }
    }
  }
}