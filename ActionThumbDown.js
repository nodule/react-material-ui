module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/thumb-down": require('material-ui/svg-icons/action/thumb-down')
    }
  },
  name: "ActionThumbDown",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionThumbDown",
        type: "Component"
      }
    }
  }
}