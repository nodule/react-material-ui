module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/reorder": require('material-ui/svg-icons/action/reorder')
    }
  },
  name: "ActionReorder",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionReorder",
        type: "Component"
      }
    }
  }
}