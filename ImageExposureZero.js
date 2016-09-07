module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/exposure-zero": require('material-ui/svg-icons/image/exposure-zero')
    }
  },
  name: "ImageExposureZero",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageExposureZero",
        type: "Component"
      }
    }
  }
}