module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/navigation/last-page": require('material-ui/svg-icons/navigation/last-page')
    }
  },
  name: "NavigationLastPage",
  ports: {
    input: {},
    output: {
      component: {
        title: "NavigationLastPage",
        type: "Component"
      }
    }
  }
}