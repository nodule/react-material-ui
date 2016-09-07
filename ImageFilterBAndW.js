module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/filter-b-and-w": require('material-ui/svg-icons/image/filter-b-and-w')
    }
  },
  name: "ImageFilterBAndW",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageFilterBAndW",
        type: "Component"
      }
    }
  }
}