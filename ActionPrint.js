module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/print": require('material-ui/svg-icons/action/print')
    }
  },
  name: "ActionPrint",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionPrint",
        type: "Component"
      }
    }
  }
}