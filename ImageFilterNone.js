module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/filter-none": require('material-ui/svg-icons/image/filter-none')
    }
  },
  name: "ImageFilterNone",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageFilterNone",
        type: "Component"
      }
    }
  }
}