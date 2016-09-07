module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/navigate-before": require('material-ui/svg-icons/image/navigate-before')
    }
  },
  name: "ImageNavigateBefore",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageNavigateBefore",
        type: "Component"
      }
    }
  }
}