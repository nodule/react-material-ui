module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/color-lens": require('material-ui/svg-icons/image/color-lens')
    }
  },
  name: "ImageColorLens",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageColorLens",
        type: "Component"
      }
    }
  }
}