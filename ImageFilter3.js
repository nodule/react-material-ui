module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/filter-3": require('material-ui/svg-icons/image/filter-3')
    }
  },
  name: "ImageFilter3",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageFilter3",
        type: "Component"
      }
    }
  }
}