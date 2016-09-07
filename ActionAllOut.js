module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/all-out": require('material-ui/svg-icons/action/all-out')
    }
  },
  name: "ActionAllOut",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionAllOut",
        type: "Component"
      }
    }
  }
}