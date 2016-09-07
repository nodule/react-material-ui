module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/wrap-text": require('material-ui/svg-icons/editor/wrap-text')
    }
  },
  name: "EditorWrapText",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorWrapText",
        type: "Component"
      }
    }
  }
}