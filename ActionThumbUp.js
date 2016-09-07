module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/thumb-up": require('material-ui/svg-icons/action/thumb-up')
    }
  },
  name: "ActionThumbUp",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionThumbUp",
        type: "Component"
      }
    }
  }
}