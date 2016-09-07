module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/navigation/cancel": require('material-ui/svg-icons/navigation/cancel')
    }
  },
  name: "NavigationCancel",
  ports: {
    input: {},
    output: {
      component: {
        title: "NavigationCancel",
        type: "Component"
      }
    }
  }
}