module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/cached": require('material-ui/svg-icons/action/cached')
    }
  },
  name: "ActionCached",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionCached",
        type: "Component"
      }
    }
  }
}