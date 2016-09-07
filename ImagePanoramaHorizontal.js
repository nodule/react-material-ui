module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/panorama-horizontal": require('material-ui/svg-icons/image/panorama-horizontal')
    }
  },
  name: "ImagePanoramaHorizontal",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImagePanoramaHorizontal",
        type: "Component"
      }
    }
  }
}