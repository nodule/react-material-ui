module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/border-inner": require('material-ui/svg-icons/editor/border-inner')
    }
  },
  name: "EditorBorderInner",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorBorderInner",
        type: "Component"
      }
    }
  }
}