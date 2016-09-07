module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/filter-drama": require('material-ui/svg-icons/image/filter-drama')
    }
  },
  name: "ImageFilterDrama",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageFilterDrama",
        type: "Component"
      }
    }
  }
}