module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/navigation/arrow-drop-down": require('material-ui/svg-icons/navigation/arrow-drop-down')
    }
  },
  name: "NavigationArrowDropDown",
  ports: {
    input: {},
    output: {
      component: {
        title: "NavigationArrowDropDown",
        type: "Component"
      }
    }
  }
}