module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/switch-camera": require('material-ui/svg-icons/image/switch-camera')
    }
  },
  name: "ImageSwitchCamera",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageSwitchCamera",
        type: "Component"
      }
    }
  }
}