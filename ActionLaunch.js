module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/launch": require('material-ui/svg-icons/action/launch')
    }
  },
  name: "ActionLaunch",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionLaunch",
        type: "Component"
      }
    }
  }
}