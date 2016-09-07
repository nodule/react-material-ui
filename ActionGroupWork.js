module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/group-work": require('material-ui/svg-icons/action/group-work')
    }
  },
  name: "ActionGroupWork",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionGroupWork",
        type: "Component"
      }
    }
  }
}