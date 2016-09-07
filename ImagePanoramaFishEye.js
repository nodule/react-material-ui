module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/panorama-fish-eye": require('material-ui/svg-icons/image/panorama-fish-eye')
    }
  },
  name: "ImagePanoramaFishEye",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImagePanoramaFishEye",
        type: "Component"
      }
    }
  }
}