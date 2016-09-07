module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/panorama-wide-angle": require('material-ui/svg-icons/image/panorama-wide-angle')
    }
  },
  name: "ImagePanoramaWideAngle",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImagePanoramaWideAngle",
        type: "Component"
      }
    }
  }
}