module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/slideshow": require('material-ui/svg-icons/image/slideshow')
    }
  },
  name: "ImageSlideshow",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageSlideshow",
        type: "Component"
      }
    }
  }
}