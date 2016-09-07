module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/restore-page": require('material-ui/svg-icons/action/restore-page')
    }
  },
  name: "ActionRestorePage",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionRestorePage",
        type: "Component"
      }
    }
  }
}