module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/panorama-vertical": require('material-ui/svg-icons/image/panorama-vertical')
    }
  },
  name: "ImagePanoramaVertical",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImagePanoramaVertical",
        type: "Component"
      }
    }
  }
}