module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/border-top": require('material-ui/svg-icons/editor/border-top')
    }
  },
  name: "EditorBorderTop",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorBorderTop",
        type: "Component"
      }
    }
  }
}