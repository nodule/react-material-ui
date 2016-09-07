module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/insert-emoticon": require('material-ui/svg-icons/editor/insert-emoticon')
    }
  },
  name: "EditorInsertEmoticon",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorInsertEmoticon",
        type: "Component"
      }
    }
  }
}