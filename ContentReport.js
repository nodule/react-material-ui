module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/report": require('material-ui/svg-icons/content/report')
    }
  },
  name: "ContentReport",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentReport",
        type: "Component"
      }
    }
  }
}