module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/photo-camera": require('material-ui/svg-icons/image/photo-camera')
    }
  },
  name: "ImagePhotoCamera",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImagePhotoCamera",
        type: "Component"
      }
    }
  }
}