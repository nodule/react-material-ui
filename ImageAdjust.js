module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/adjust": require('material-ui/svg-icons/image/adjust')
    }
  },
  name: "ImageAdjust",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageAdjust",
        type: "Component"
      }
    }
  }
}