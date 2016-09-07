module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/sort-by-alpha": require('material-ui/svg-icons/av/sort-by-alpha')
    }
  },
  name: "AvSortByAlpha",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvSortByAlpha",
        type: "Component"
      }
    }
  }
}