module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/navigation/close": require('material-ui/svg-icons/navigation/close')
    }
  },
  name: "NavigationClose",
  ports: {
    input: {},
    output: {
      component: {
        title: "NavigationClose",
        type: "Component"
      }
    }
  }
}