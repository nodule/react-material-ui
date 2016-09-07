module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/camera-roll": require('material-ui/svg-icons/image/camera-roll')
    }
  },
  name: "ImageCameraRoll",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageCameraRoll",
        type: "Component"
      }
    }
  }
}