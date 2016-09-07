module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/crop-square": require('material-ui/svg-icons/image/crop-square')
    }
  },
  name: "ImageCropSquare",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageCropSquare",
        type: "Component"
      }
    }
  }
}