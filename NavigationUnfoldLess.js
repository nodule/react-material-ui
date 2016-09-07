module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/navigation/unfold-less": require('material-ui/svg-icons/navigation/unfold-less')
    }
  },
  name: "NavigationUnfoldLess",
  ports: {
    input: {},
    output: {
      component: {
        title: "NavigationUnfoldLess",
        type: "Component"
      }
    }
  }
}