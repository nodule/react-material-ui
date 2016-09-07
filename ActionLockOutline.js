module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/lock-outline": require('material-ui/svg-icons/action/lock-outline')
    }
  },
  name: "ActionLockOutline",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionLockOutline",
        type: "Component"
      }
    }
  }
}