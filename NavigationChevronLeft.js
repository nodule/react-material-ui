module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/navigation/chevron-left": require('material-ui/svg-icons/navigation/chevron-left')
    }
  },
  name: "NavigationChevronLeft",
  ports: {
    input: {},
    output: {
      component: {
        title: "NavigationChevronLeft",
        type: "Component"
      }
    }
  }
}