module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/delete": require('material-ui/svg-icons/action/delete')
    }
  },
  name: "ActionDelete",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionDelete",
        type: "Component"
      }
    }
  }
}