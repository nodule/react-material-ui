module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/navigation/arrow-drop-up": require('material-ui/svg-icons/navigation/arrow-drop-up')
    }
  },
  name: "NavigationArrowDropUp",
  ports: {
    input: {},
    output: {
      component: {
        title: "NavigationArrowDropUp",
        type: "Component"
      }
    }
  }
}