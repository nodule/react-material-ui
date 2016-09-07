module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/multiline-chart": require('material-ui/svg-icons/editor/multiline-chart')
    }
  },
  name: "EditorMultilineChart",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorMultilineChart",
        type: "Component"
      }
    }
  }
}