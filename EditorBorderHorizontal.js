module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/border-horizontal": require('material-ui/svg-icons/editor/border-horizontal')
    }
  },
  name: "EditorBorderHorizontal",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorBorderHorizontal",
        type: "Component"
      }
    }
  }
}