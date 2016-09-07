module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/border-all": require('material-ui/svg-icons/editor/border-all')
    }
  },
  name: "EditorBorderAll",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorBorderAll",
        type: "Component"
      }
    }
  }
}