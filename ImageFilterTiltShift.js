module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/filter-tilt-shift": require('material-ui/svg-icons/image/filter-tilt-shift')
    }
  },
  name: "ImageFilterTiltShift",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageFilterTiltShift",
        type: "Component"
      }
    }
  }
}