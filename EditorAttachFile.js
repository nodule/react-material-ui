module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/attach-file": require('material-ui/svg-icons/editor/attach-file')
    }
  },
  name: "EditorAttachFile",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorAttachFile",
        type: "Component"
      }
    }
  }
}