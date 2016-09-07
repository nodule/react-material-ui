module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/insert-comment": require('material-ui/svg-icons/editor/insert-comment')
    }
  },
  name: "EditorInsertComment",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorInsertComment",
        type: "Component"
      }
    }
  }
}