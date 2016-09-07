module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/open-in-browser": require('material-ui/svg-icons/action/open-in-browser')
    }
  },
  name: "ActionOpenInBrowser",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionOpenInBrowser",
        type: "Component"
      }
    }
  }
}