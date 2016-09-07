module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/pie-chart-outlined": require('material-ui/svg-icons/editor/pie-chart-outlined')
    }
  },
  name: "EditorPieChartOutlined",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorPieChartOutlined",
        type: "Component"
      }
    }
  }
}