module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/crop-16-9": require('material-ui/svg-icons/image/crop-16-9')
    }
  },
  name: "ImageCrop169",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageCrop169",
        type: "Component"
      }
    }
  }
}