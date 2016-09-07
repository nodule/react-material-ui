module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/lock": require('material-ui/svg-icons/action/lock')
    }
  },
  name: "ActionLock",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionLock",
        type: "Component"
      }
    }
  }
}