module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/grid-on": require('material-ui/svg-icons/image/grid-on')
    }
  },
  name: "ImageGridOn",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageGridOn",
        type: "Component"
      }
    }
  }
}