module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/list": require('material-ui/svg-icons/action/list')
    }
  },
  name: "ActionList",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionList",
        type: "Component"
      }
    }
  }
}