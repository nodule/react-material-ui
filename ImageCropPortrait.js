module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/crop-portrait": require('material-ui/svg-icons/image/crop-portrait')
    }
  },
  name: "ImageCropPortrait",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageCropPortrait",
        type: "Component"
      }
    }
  }
}