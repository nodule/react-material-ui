module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/assignment": require('material-ui/svg-icons/action/assignment')
    }
  },
  name: "ActionAssignment",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionAssignment",
        type: "Component"
      }
    }
  }
}