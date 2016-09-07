module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/get-app": require('material-ui/svg-icons/action/get-app')
    }
  },
  name: "ActionGetApp",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionGetApp",
        type: "Component"
      }
    }
  }
}