module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/pageview": require('material-ui/svg-icons/action/pageview')
    }
  },
  name: "ActionPageview",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionPageview",
        type: "Component"
      }
    }
  }
}