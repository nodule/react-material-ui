module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/navigation-arrow-drop-right": require('material-ui/svg-icons/navigation-arrow-drop-right')
    }
  },
  name: "NavigationArrowDropRight",
  ports: {
    input: {},
    output: {
      component: {
        title: "NavigationArrowDropRight",
        type: "Component"
      }
    }
  }
}