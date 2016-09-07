module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/swap-vertical-circle": require('material-ui/svg-icons/action/swap-vertical-circle')
    }
  },
  name: "ActionSwapVerticalCircle",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionSwapVerticalCircle",
        type: "Component"
      }
    }
  }
}