module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/alert/warning": require('material-ui/svg-icons/alert/warning')
    }
  },
  name: "AlertWarning",
  ports: {
    input: {},
    output: {
      component: {
        title: "AlertWarning",
        type: "Component"
      }
    }
  }
}