module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/filter-1": require('material-ui/svg-icons/image/filter-1')
    }
  },
  name: "ImageFilter1",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageFilter1",
        type: "Component"
      }
    }
  }
}