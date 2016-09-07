module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/redeem": require('material-ui/svg-icons/action/redeem')
    }
  },
  name: "ActionRedeem",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionRedeem",
        type: "Component"
      }
    }
  }
}