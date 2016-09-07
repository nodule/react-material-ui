module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/navigation/arrow-forward": require('material-ui/svg-icons/navigation/arrow-forward')
    }
  },
  name: "NavigationArrowForward",
  ports: {
    input: {},
    output: {
      component: {
        title: "NavigationArrowForward",
        type: "Component"
      }
    }
  }
}