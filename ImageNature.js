module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/nature": require('material-ui/svg-icons/image/nature')
    }
  },
  name: "ImageNature",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageNature",
        type: "Component"
      }
    }
  }
}