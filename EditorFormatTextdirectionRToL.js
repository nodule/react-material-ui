module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/format-textdirection-r-to-l": require('material-ui/svg-icons/editor/format-textdirection-r-to-l')
    }
  },
  name: "EditorFormatTextdirectionRToL",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorFormatTextdirectionRToL",
        type: "Component"
      }
    }
  }
}