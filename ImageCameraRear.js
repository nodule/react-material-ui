module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/camera-rear": require('material-ui/svg-icons/image/camera-rear')
    }
  },
  name: "ImageCameraRear",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageCameraRear",
        type: "Component"
      }
    }
  }
}