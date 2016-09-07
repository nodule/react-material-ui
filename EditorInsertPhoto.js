module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/insert-photo": require('material-ui/svg-icons/editor/insert-photo')
    }
  },
  name: "EditorInsertPhoto",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorInsertPhoto",
        type: "Component"
      }
    }
  }
}