module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/crop-landscape": require('material-ui/svg-icons/image/crop-landscape')
    }
  },
  name: "ImageCropLandscape",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageCropLandscape",
        type: "Component"
      }
    }
  }
}