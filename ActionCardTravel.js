module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/card-travel": require('material-ui/svg-icons/action/card-travel')
    }
  },
  name: "ActionCardTravel",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionCardTravel",
        type: "Component"
      }
    }
  }
}