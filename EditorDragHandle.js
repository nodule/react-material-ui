module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/drag-handle": require('material-ui/svg-icons/editor/drag-handle')
    }
  },
  name: "EditorDragHandle",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorDragHandle",
        type: "Component"
      }
    }
  }
}