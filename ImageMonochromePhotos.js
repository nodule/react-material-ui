module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/monochrome-photos": require('material-ui/svg-icons/image/monochrome-photos')
    }
  },
  name: "ImageMonochromePhotos",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageMonochromePhotos",
        type: "Component"
      }
    }
  }
}