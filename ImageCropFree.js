module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/crop-free": require('material-ui/svg-icons/image/crop-free')
    }
  },
  name: "ImageCropFree",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageCropFree",
        type: "Component"
      }
    }
  }
}