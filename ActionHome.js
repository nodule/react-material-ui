module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/home": require('material-ui/svg-icons/action/home')
    }
  },
  name: "ActionHome",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionHome",
        type: "Component"
      }
    }
  }
}