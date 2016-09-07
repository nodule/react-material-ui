module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/vignette": require('material-ui/svg-icons/image/vignette')
    }
  },
  name: "ImageVignette",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageVignette",
        type: "Component"
      }
    }
  }
}