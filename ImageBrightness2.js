module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/brightness-2": require('material-ui/svg-icons/image/brightness-2')
    }
  },
  name: "ImageBrightness2",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageBrightness2",
        type: "Component"
      }
    }
  }
}