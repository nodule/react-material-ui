module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/crop-din": require('material-ui/svg-icons/image/crop-din')
    }
  },
  name: "ImageCropDin",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageCropDin",
        type: "Component"
      }
    }
  }
}