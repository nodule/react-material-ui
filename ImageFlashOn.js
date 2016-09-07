module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/flash-on": require('material-ui/svg-icons/image/flash-on')
    }
  },
  name: "ImageFlashOn",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageFlashOn",
        type: "Component"
      }
    }
  }
}