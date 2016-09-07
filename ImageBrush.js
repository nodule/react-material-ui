module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/brush": require('material-ui/svg-icons/image/brush')
    }
  },
  name: "ImageBrush",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageBrush",
        type: "Component"
      }
    }
  }
}