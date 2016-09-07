module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/history": require('material-ui/svg-icons/action/history')
    }
  },
  name: "ActionHistory",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionHistory",
        type: "Component"
      }
    }
  }
}