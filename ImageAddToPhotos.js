module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/add-to-photos": require('material-ui/svg-icons/image/add-to-photos')
    }
  },
  name: "ImageAddToPhotos",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageAddToPhotos",
        type: "Component"
      }
    }
  }
}