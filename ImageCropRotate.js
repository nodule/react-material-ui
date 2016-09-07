module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/crop-rotate": require('material-ui/svg-icons/image/crop-rotate')
    }
  },
  name: "ImageCropRotate",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageCropRotate",
        type: "Component"
      }
    }
  }
}