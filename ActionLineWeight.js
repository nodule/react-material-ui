module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/line-weight": require('material-ui/svg-icons/action/line-weight')
    }
  },
  name: "ActionLineWeight",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionLineWeight",
        type: "Component"
      }
    }
  }
}