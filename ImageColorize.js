module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/colorize": require('material-ui/svg-icons/image/colorize')
    }
  },
  name: "ImageColorize",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageColorize",
        type: "Component"
      }
    }
  }
}