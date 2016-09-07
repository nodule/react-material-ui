module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/navigation/refresh": require('material-ui/svg-icons/navigation/refresh')
    }
  },
  name: "NavigationRefresh",
  ports: {
    input: {},
    output: {
      component: {
        title: "NavigationRefresh",
        type: "Component"
      }
    }
  }
}