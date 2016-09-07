module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/line-style": require('material-ui/svg-icons/action/line-style')
    }
  },
  name: "ActionLineStyle",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionLineStyle",
        type: "Component"
      }
    }
  }
}