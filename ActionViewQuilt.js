module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/view-quilt": require('material-ui/svg-icons/action/view-quilt')
    }
  },
  name: "ActionViewQuilt",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionViewQuilt",
        type: "Component"
      }
    }
  }
}