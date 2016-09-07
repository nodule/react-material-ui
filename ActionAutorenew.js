module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/autorenew": require('material-ui/svg-icons/action/autorenew')
    }
  },
  name: "ActionAutorenew",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionAutorenew",
        type: "Component"
      }
    }
  }
}