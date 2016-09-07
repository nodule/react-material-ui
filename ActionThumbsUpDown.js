module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/thumbs-up-down": require('material-ui/svg-icons/action/thumbs-up-down')
    }
  },
  name: "ActionThumbsUpDown",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionThumbsUpDown",
        type: "Component"
      }
    }
  }
}