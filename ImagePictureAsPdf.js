module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/picture-as-pdf": require('material-ui/svg-icons/image/picture-as-pdf')
    }
  },
  name: "ImagePictureAsPdf",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImagePictureAsPdf",
        type: "Component"
      }
    }
  }
}