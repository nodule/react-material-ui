module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/store": require('material-ui/svg-icons/action/store')
    }
  },
  name: "ActionStore",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionStore",
        type: "Component"
      }
    }
  }
}