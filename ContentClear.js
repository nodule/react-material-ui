module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/clear": require('material-ui/svg-icons/content/clear')
    }
  },
  name: "ContentClear",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentClear",
        type: "Component"
      }
    }
  }
}