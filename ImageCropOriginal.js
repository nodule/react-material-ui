module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/crop-original": require('material-ui/svg-icons/image/crop-original')
    }
  },
  name: "ImageCropOriginal",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageCropOriginal",
        type: "Component"
      }
    }
  }
}