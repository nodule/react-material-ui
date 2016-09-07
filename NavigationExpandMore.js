module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/navigation/expand-more": require('material-ui/svg-icons/navigation/expand-more')
    }
  },
  name: "NavigationExpandMore",
  ports: {
    input: {},
    output: {
      component: {
        title: "NavigationExpandMore",
        type: "Component"
      }
    }
  }
}