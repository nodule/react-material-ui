module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/navigation/first-page": require('material-ui/svg-icons/navigation/first-page')
    }
  },
  name: "NavigationFirstPage",
  ports: {
    input: {},
    output: {
      component: {
        title: "NavigationFirstPage",
        type: "Component"
      }
    }
  }
}