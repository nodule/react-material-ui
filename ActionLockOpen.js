module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/lock-open": require('material-ui/svg-icons/action/lock-open')
    }
  },
  name: "ActionLockOpen",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionLockOpen",
        type: "Component"
      }
    }
  }
}