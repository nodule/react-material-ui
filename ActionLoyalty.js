module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/loyalty": require('material-ui/svg-icons/action/loyalty')
    }
  },
  name: "ActionLoyalty",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionLoyalty",
        type: "Component"
      }
    }
  }
}