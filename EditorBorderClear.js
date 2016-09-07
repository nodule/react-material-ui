module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/border-clear": require('material-ui/svg-icons/editor/border-clear')
    }
  },
  name: "EditorBorderClear",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorBorderClear",
        type: "Component"
      }
    }
  }
}