module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/panorama": require('material-ui/svg-icons/image/panorama')
    }
  },
  name: "ImagePanorama",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImagePanorama",
        type: "Component"
      }
    }
  }
}