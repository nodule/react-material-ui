module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/open-in-new": require('material-ui/svg-icons/action/open-in-new')
    }
  },
  name: "ActionOpenInNew",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionOpenInNew",
        type: "Component"
      }
    }
  }
}