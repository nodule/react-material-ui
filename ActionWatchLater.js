module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/watch-later": require('material-ui/svg-icons/action/watch-later')
    }
  },
  name: "ActionWatchLater",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionWatchLater",
        type: "Component"
      }
    }
  }
}