module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/navigation/fullscreen-exit": require('material-ui/svg-icons/navigation/fullscreen-exit')
    }
  },
  name: "NavigationFullscreenExit",
  ports: {
    input: {},
    output: {
      component: {
        title: "NavigationFullscreenExit",
        type: "Component"
      }
    }
  }
}