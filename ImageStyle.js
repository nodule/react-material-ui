module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/style": require('material-ui/svg-icons/image/style')
    }
  },
  name: "ImageStyle",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageStyle",
        type: "Component"
      }
    }
  }
}