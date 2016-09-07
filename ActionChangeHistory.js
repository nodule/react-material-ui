module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/change-history": require('material-ui/svg-icons/action/change-history')
    }
  },
  name: "ActionChangeHistory",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionChangeHistory",
        type: "Component"
      }
    }
  }
}