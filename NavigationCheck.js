module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/navigation/check": require('material-ui/svg-icons/navigation/check')
    }
  },
  name: "NavigationCheck",
  ports: {
    input: {},
    output: {
      component: {
        title: "NavigationCheck",
        type: "Component"
      }
    }
  }
}