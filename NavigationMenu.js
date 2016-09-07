module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/navigation/menu": require('material-ui/svg-icons/navigation/menu')
    }
  },
  name: "NavigationMenu",
  ports: {
    input: {},
    output: {
      component: {
        title: "NavigationMenu",
        type: "Component"
      }
    }
  }
}