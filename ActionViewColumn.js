module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/view-column": require('material-ui/svg-icons/action/view-column')
    }
  },
  name: "ActionViewColumn",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionViewColumn",
        type: "Component"
      }
    }
  }
}