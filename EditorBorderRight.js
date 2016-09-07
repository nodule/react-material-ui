module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/border-right": require('material-ui/svg-icons/editor/border-right')
    }
  },
  name: "EditorBorderRight",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorBorderRight",
        type: "Component"
      }
    }
  }
}