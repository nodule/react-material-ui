module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/flare": require('material-ui/svg-icons/image/flare')
    }
  },
  name: "ImageFlare",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageFlare",
        type: "Component"
      }
    }
  }
}