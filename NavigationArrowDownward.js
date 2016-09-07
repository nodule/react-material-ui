module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/navigation/arrow-downward": require('material-ui/svg-icons/navigation/arrow-downward')
    }
  },
  name: "NavigationArrowDownward",
  ports: {
    input: {},
    output: {
      component: {
        title: "NavigationArrowDownward",
        type: "Component"
      }
    }
  }
}