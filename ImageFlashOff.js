module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/flash-off": require('material-ui/svg-icons/image/flash-off')
    }
  },
  name: "ImageFlashOff",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageFlashOff",
        type: "Component"
      }
    }
  }
}