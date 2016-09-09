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
        name: "children",
        required: false
      },
      className: {
        type: "string",
        name: "className",
        required: false
      },
      columnNumber: {
        type: "number",
        name: "columnNumber",
        required: false
      },
      hoverable: {
        type: "boolean",
        name: "hoverable",
        "default": false
      },
      onClick: {
        title: "Enable onClick",
        type: "boolean",
        name: "onClick",
        required: false
      },
      onHover: {
        title: "Enable onHover",
        type: "boolean",
        name: "onHover",
        required: false
      },
      onHoverExit: {
        title: "Enable onHoverExit",
        type: "boolean",
        name: "onHoverExit",
        required: false
      },
      style: {
        type: "object",
        name: "style",
        required: false
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