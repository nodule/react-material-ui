module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/details": require('material-ui/svg-icons/image/details')
    }
  },
  name: "ImageDetails",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageDetails",
        type: "Component"
      }
    }
  }
}