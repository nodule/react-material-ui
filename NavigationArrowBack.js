module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/navigation/arrow-back": require('material-ui/svg-icons/navigation/arrow-back')
    }
  },
  name: "NavigationArrowBack",
  ports: {
    input: {},
    output: {
      component: {
        title: "NavigationArrowBack",
        type: "Component"
      }
    }
  }
}