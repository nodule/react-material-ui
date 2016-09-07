module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/alert/error": require('material-ui/svg-icons/alert/error')
    }
  },
  name: "AlertError",
  ports: {
    input: {},
    output: {
      component: {
        title: "AlertError",
        type: "Component"
      }
    }
  }
}