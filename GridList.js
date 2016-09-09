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
        "default": 0
      },
      children: {
        type: "node",
        name: "children"
      },
      cols: {
        type: "number",
        name: "cols",
        "default": 0
      },
      padding: {
        type: "number",
        name: "padding",
        "default": 0
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