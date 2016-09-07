module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/palette": require('material-ui/svg-icons/image/palette')
    }
  },
  name: "ImagePalette",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImagePalette",
        type: "Component"
      }
    }
  }
}