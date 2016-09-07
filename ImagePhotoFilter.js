module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/photo-filter": require('material-ui/svg-icons/image/photo-filter')
    }
  },
  name: "ImagePhotoFilter",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImagePhotoFilter",
        type: "Component"
      }
    }
  }
}