module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/text-fields": require('material-ui/svg-icons/editor/text-fields')
    }
  },
  name: "EditorTextFields",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorTextFields",
        type: "Component"
      }
    }
  }
}