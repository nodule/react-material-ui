module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/pie-chart": require('material-ui/svg-icons/editor/pie-chart')
    }
  },
  name: "EditorPieChart",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorPieChart",
        type: "Component"
      }
    }
  }
}