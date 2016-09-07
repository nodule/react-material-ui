module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/accessible": require('material-ui/svg-icons/action/accessible')
    }
  },
  name: "ActionAccessible",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionAccessible",
        type: "Component"
      }
    }
  }
}