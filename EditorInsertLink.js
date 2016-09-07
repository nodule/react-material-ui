module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/insert-link": require('material-ui/svg-icons/editor/insert-link')
    }
  },
  name: "EditorInsertLink",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorInsertLink",
        type: "Component"
      }
    }
  }
}