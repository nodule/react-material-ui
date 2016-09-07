module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/crop": require('material-ui/svg-icons/image/crop')
    }
  },
  name: "ImageCrop",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageCrop",
        type: "Component"
      }
    }
  }
}