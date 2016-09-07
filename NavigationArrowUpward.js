module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/navigation/arrow-upward": require('material-ui/svg-icons/navigation/arrow-upward')
    }
  },
  name: "NavigationArrowUpward",
  ports: {
    input: {},
    output: {
      component: {
        title: "NavigationArrowUpward",
        type: "Component"
      }
    }
  }
}