module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/filter-2": require('material-ui/svg-icons/image/filter-2')
    }
  },
  name: "ImageFilter2",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageFilter2",
        type: "Component"
      }
    }
  }
}