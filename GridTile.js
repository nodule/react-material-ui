module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/GridList/GridTile": require('material-ui/GridList/GridTile')
    }
  },
  name: "GridTile",
  ports: {
    input: {
      actionIcon: {
        type: "element",
        name: "actionIcon"
      },
      actionPosition: {
        type: "enum",
        name: "actionPosition",
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
      containerElement: {
        type: "union",
        name: "containerElement",
        "default": null
      },
      rows: {
        type: "number",
        name: "rows",
        "default": ""
      },
      style: {
        type: "object",
        name: "style"
      },
      subtitle: {
        type: "node",
        name: "subtitle"
      },
      title: {
        type: "node",
        name: "title"
      },
      titleBackground: {
        type: "string",
        name: "titleBackground",
        "default": ""
      },
      titlePosition: {
        type: "enum",
        name: "titlePosition",
        "default": ""
      }
    },
    output: {
      component: {
        title: "GridTile",
        type: "Component"
      }
    }
  }
}