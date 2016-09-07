module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/transform": require('material-ui/svg-icons/image/transform')
    }
  },
  name: "ImageTransform",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageTransform",
        type: "Component"
      }
    }
  }
}