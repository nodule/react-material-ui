module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/exposure": require('material-ui/svg-icons/image/exposure')
    }
  },
  name: "ImageExposure",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageExposure",
        type: "Component"
      }
    }
  }
}