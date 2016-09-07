module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/grid-off": require('material-ui/svg-icons/image/grid-off')
    }
  },
  name: "ImageGridOff",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageGridOff",
        type: "Component"
      }
    }
  }
}