module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/camera-front": require('material-ui/svg-icons/image/camera-front')
    }
  },
  name: "ImageCameraFront",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageCameraFront",
        type: "Component"
      }
    }
  }
}