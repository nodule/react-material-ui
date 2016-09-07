module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/navigation/expand-less": require('material-ui/svg-icons/navigation/expand-less')
    }
  },
  name: "NavigationExpandLess",
  ports: {
    input: {},
    output: {
      component: {
        title: "NavigationExpandLess",
        type: "Component"
      }
    }
  }
}