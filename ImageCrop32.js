module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/crop-3-2": require('material-ui/svg-icons/image/crop-3-2')
    }
  },
  name: "ImageCrop32",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageCrop32",
        type: "Component"
      }
    }
  }
}