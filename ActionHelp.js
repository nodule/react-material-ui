module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/help": require('material-ui/svg-icons/action/help')
    }
  },
  name: "ActionHelp",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionHelp",
        type: "Component"
      }
    }
  }
}