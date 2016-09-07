module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/camera-alt": require('material-ui/svg-icons/image/camera-alt')
    }
  },
  name: "ImageCameraAlt",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageCameraAlt",
        type: "Component"
      }
    }
  }
}