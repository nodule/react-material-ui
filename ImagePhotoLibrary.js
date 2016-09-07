module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/photo-library": require('material-ui/svg-icons/image/photo-library')
    }
  },
  name: "ImagePhotoLibrary",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImagePhotoLibrary",
        type: "Component"
      }
    }
  }
}