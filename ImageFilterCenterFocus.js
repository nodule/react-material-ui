module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/filter-center-focus": require('material-ui/svg-icons/image/filter-center-focus')
    }
  },
  name: "ImageFilterCenterFocus",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageFilterCenterFocus",
        type: "Component"
      }
    }
  }
}