module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/navigation/more-horiz": require('material-ui/svg-icons/navigation/more-horiz')
    }
  },
  name: "NavigationMoreHoriz",
  ports: {
    input: {},
    output: {
      component: {
        title: "NavigationMoreHoriz",
        type: "Component"
      }
    }
  }
}