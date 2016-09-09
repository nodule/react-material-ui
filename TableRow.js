module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Table/TableRow": require('material-ui/Table/TableRow')
    }
  },
  name: "TableRow",
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
      displayBorder: {
        type: "boolean",
        name: "displayBorder",
        "default": false
      },
      hoverable: {
        type: "boolean",
        name: "hoverable",
        "default": false
      },
      hovered: {
        type: "boolean",
        name: "hovered",
        "default": false
      },
      onCellClick: {
        title: "Enable onCellClick",
        type: "boolean",
        name: "onCellClick",
        required: false
      },
      onCellHover: {
        title: "Enable onCellHover",
        type: "boolean",
        name: "onCellHover",
        required: false
      },
      onCellHoverExit: {
        title: "Enable onCellHoverExit",
        type: "boolean",
        name: "onCellHoverExit",
        required: false
      },
      onRowClick: {
        title: "Enable onRowClick",
        type: "boolean",
        name: "onRowClick",
        required: false
      },
      onRowHover: {
        title: "Enable onRowHover",
        type: "boolean",
        name: "onRowHover",
        required: false
      },
      onRowHoverExit: {
        title: "Enable onRowHoverExit",
        type: "boolean",
        name: "onRowHoverExit",
        required: false
      },
      rowNumber: {
        type: "number",
        name: "rowNumber",
        required: false
      },
      selectable: {
        type: "boolean",
        name: "selectable",
        "default": false
      },
      selected: {
        type: "boolean",
        name: "selected",
        "default": false
      },
      striped: {
        type: "boolean",
        name: "striped",
        "default": false
      },
      style: {
        type: "object",
        name: "style",
        required: false
      }
    },
    output: {
      component: {
        title: "TableRow",
        type: "Component"
      },
      onCellClick: {
        type: "any"
      },
      onCellHover: {
        type: "any"
      },
      onCellHoverExit: {
        type: "any"
      },
      onRowClick: {
        type: "any"
      },
      onRowHover: {
        type: "any"
      },
      onRowHoverExit: {
        type: "any"
      }
    }
  }
}