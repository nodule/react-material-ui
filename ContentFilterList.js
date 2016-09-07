module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/filter-list": require('material-ui/svg-icons/content/filter-list')
    }
  },
  name: "ContentFilterList",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentFilterList",
        type: "Component"
      }
    }
  }
}