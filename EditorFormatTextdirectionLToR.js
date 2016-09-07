module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/format-textdirection-l-to-r": require('material-ui/svg-icons/editor/format-textdirection-l-to-r')
    }
  },
  name: "EditorFormatTextdirectionLToR",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorFormatTextdirectionLToR",
        type: "Component"
      }
    }
  }
}