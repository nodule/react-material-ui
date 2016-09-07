module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/flip": require('material-ui/svg-icons/image/flip')
    }
  },
  name: "ImageFlip",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageFlip",
        type: "Component"
      }
    }
  }
}