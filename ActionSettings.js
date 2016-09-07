module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/settings": require('material-ui/svg-icons/action/settings')
    }
  },
  name: "ActionSettings",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionSettings",
        type: "Component"
      }
    }
  }
}