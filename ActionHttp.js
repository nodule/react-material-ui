module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/http": require('material-ui/svg-icons/action/http')
    }
  },
  name: "ActionHttp",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionHttp",
        type: "Component"
      }
    }
  }
}