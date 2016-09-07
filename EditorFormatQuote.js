module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/format-quote": require('material-ui/svg-icons/editor/format-quote')
    }
  },
  name: "EditorFormatQuote",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorFormatQuote",
        type: "Component"
      }
    }
  }
}