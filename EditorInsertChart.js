module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/insert-chart": require('material-ui/svg-icons/editor/insert-chart')
    }
  },
  name: "EditorInsertChart",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorInsertChart",
        type: "Component"
      }
    }
  }
}