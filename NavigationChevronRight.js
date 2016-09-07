module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/navigation/chevron-right": require('material-ui/svg-icons/navigation/chevron-right')
    }
  },
  name: "NavigationChevronRight",
  ports: {
    input: {},
    output: {
      component: {
        title: "NavigationChevronRight",
        type: "Component"
      }
    }
  }
}