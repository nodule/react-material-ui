module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/navigation/fullscreen": require('material-ui/svg-icons/navigation/fullscreen')
    }
  },
  name: "NavigationFullscreen",
  ports: {
    input: {},
    output: {
      component: {
        title: "NavigationFullscreen",
        type: "Component"
      }
    }
  }
}