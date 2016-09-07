module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/navigation/apps": require('material-ui/svg-icons/navigation/apps')
    }
  },
  name: "NavigationApps",
  ports: {
    input: {},
    output: {
      component: {
        title: "NavigationApps",
        type: "Component"
      }
    }
  }
}