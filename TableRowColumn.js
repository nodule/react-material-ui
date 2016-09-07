module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Table/TableRowColumn": require('material-ui/Table/TableRowColumn')
    }
  },
  name: "TableRowColumn",
  ports: {
    input: {
      children: {
        type: "node",
        name: "children"
      },
      className: {
        type: "string",
        name: "className"
      },
      columnNumber: {
        type: "number",
        name: "columnNumber"
      },
      hoverable: {
        type: "boolean",
        name: "hoverable",
        "default": false
      },
      onClick: {
        title: "Enable onClick",
        type: "boolean",
        name: "onClick"
      },
      onHover: {
        title: "Enable onHover",
        type: "boolean",
        name: "onHover"
      },
      onHoverExit: {
        title: "Enable onHoverExit",
        type: "boolean",
        name: "onHoverExit"
      },
      style: {
        type: "object",
        name: "style"
      }
    },
    output: {
      component: {
        title: "TableRowColumn",
        type: "Component"
      },
      onClick: {
        type: "any"
      },
      onHover: {
        type: "any"
      },
      onHoverExit: {
        type: "any"
      }
    }
  }
}