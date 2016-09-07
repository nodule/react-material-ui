module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/undo": require('material-ui/svg-icons/content/undo')
    }
  },
  name: "ContentUndo",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentUndo",
        type: "Component"
      }
    }
  }
}