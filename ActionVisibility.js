module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/visibility": require('material-ui/svg-icons/action/visibility')
    }
  },
  name: "ActionVisibility",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionVisibility",
        type: "Component"
      }
    }
  }
}