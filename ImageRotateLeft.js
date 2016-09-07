module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/rotate-left": require('material-ui/svg-icons/image/rotate-left')
    }
  },
  name: "ImageRotateLeft",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageRotateLeft",
        type: "Component"
      }
    }
  }
}