module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/linked-camera": require('material-ui/svg-icons/image/linked-camera')
    }
  },
  name: "ImageLinkedCamera",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageLinkedCamera",
        type: "Component"
      }
    }
  }
}