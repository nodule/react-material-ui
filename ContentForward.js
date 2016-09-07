module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/forward": require('material-ui/svg-icons/content/forward')
    }
  },
  name: "ContentForward",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentForward",
        type: "Component"
      }
    }
  }
}