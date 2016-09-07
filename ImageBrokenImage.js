module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/broken-image": require('material-ui/svg-icons/image/broken-image')
    }
  },
  name: "ImageBrokenImage",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageBrokenImage",
        type: "Component"
      }
    }
  }
}