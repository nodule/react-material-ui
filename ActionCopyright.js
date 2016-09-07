module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/copyright": require('material-ui/svg-icons/action/copyright')
    }
  },
  name: "ActionCopyright",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionCopyright",
        type: "Component"
      }
    }
  }
}