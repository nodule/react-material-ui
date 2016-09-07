module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/https": require('material-ui/svg-icons/action/https')
    }
  },
  name: "ActionHttps",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionHttps",
        type: "Component"
      }
    }
  }
}