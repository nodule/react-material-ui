module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/GridList/GridList": require('material-ui/GridList/GridList')
    }
  },
  name: "GridList",
  ports: {
    input: {
      cellHeight: {
        type: "number",
        name: "cellHeight",
        "default": ""
      },
      children: {
        type: "node",
        name: "children"
      },
      cols: {
        type: "number",
        name: "cols",
        "default": ""
      },
      padding: {
        type: "number",
        name: "padding",
        "default": ""
      },
      style: {
        type: "object",
        name: "style"
      }
    },
    output: {
      component: {
        title: "GridList",
        type: "Component"
      }
    }
  }
}