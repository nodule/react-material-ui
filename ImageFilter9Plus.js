module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/filter-9-plus": require('material-ui/svg-icons/image/filter-9-plus')
    }
  },
  name: "ImageFilter9Plus",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageFilter9Plus",
        type: "Component"
      }
    }
  }
}