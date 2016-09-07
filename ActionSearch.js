module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/search": require('material-ui/svg-icons/action/search')
    }
  },
  name: "ActionSearch",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionSearch",
        type: "Component"
      }
    }
  }
}