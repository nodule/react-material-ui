module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/accessibility": require('material-ui/svg-icons/action/accessibility')
    }
  },
  name: "ActionAccessibility",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionAccessibility",
        type: "Component"
      }
    }
  }
}