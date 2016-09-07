module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/delete-forever": require('material-ui/svg-icons/action/delete-forever')
    }
  },
  name: "ActionDeleteForever",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionDeleteForever",
        type: "Component"
      }
    }
  }
}