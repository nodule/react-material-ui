module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/format-list-bulleted": require('material-ui/svg-icons/editor/format-list-bulleted')
    }
  },
  name: "EditorFormatListBulleted",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorFormatListBulleted",
        type: "Component"
      }
    }
  }
}