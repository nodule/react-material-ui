module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/info": require('material-ui/svg-icons/action/info')
    }
  },
  name: "ActionInfo",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionInfo",
        type: "Component"
      }
    }
  }
}