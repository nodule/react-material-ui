module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/navigation/unfold-more": require('material-ui/svg-icons/navigation/unfold-more')
    }
  },
  name: "NavigationUnfoldMore",
  ports: {
    input: {},
    output: {
      component: {
        title: "NavigationUnfoldMore",
        type: "Component"
      }
    }
  }
}