module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/flash-auto": require('material-ui/svg-icons/image/flash-auto')
    }
  },
  name: "ImageFlashAuto",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageFlashAuto",
        type: "Component"
      }
    }
  }
}