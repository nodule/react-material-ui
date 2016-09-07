module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/weekend": require('material-ui/svg-icons/content/weekend')
    }
  },
  name: "ContentWeekend",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentWeekend",
        type: "Component"
      }
    }
  }
}