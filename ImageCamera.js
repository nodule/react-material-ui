module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/camera": require('material-ui/svg-icons/image/camera')
    }
  },
  name: "ImageCamera",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageCamera",
        type: "Component"
      }
    }
  }
}