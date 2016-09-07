module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/work": require('material-ui/svg-icons/action/work')
    }
  },
  name: "ActionWork",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionWork",
        type: "Component"
      }
    }
  }
}