module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/merge-type": require('material-ui/svg-icons/editor/merge-type')
    }
  },
  name: "EditorMergeType",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorMergeType",
        type: "Component"
      }
    }
  }
}