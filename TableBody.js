module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Table/TableBody": require('material-ui/Table/TableBody')
    }
  },
  name: "TableBody",
  ports: {
    input: {
      allRowsSelected: {
        type: "boolean",
        name: "allRowsSelected",
        "default": false
      },
      children: {
        type: "node",
        name: "children"
      },
      className: {
        type: "string",
        name: "className"
      },
      deselectOnClickaway: {
        type: "boolean",
        name: "deselectOnClickaway",
        "default": false
      },
      displayRowCheckbox: {
        type: "boolean",
        name: "displayRowCheckbox",
        "default": false
      },
      multiSelectable: {
        type: "boolean",
        name: "multiSelectable",
        "default": false
      },
      onCellClick: {
        title: "Enable onCellClick",
        type: "boolean",
        name: "onCellClick"
      },
      onCellHover: {
        title: "Enable onCellHover",
        type: "boolean",
        name: "onCellHover"
      },
      onCellHoverExit: {
        title: "Enable onCellHoverExit",
        type: "boolean",
        name: "onCellHoverExit"
      },
      onRowHover: {
        title: "Enable onRowHover",
        type: "boolean",
        name: "onRowHover"
      },
      onRowHoverExit: {
        title: "Enable onRowHoverExit",
        type: "boolean",
        name: "onRowHoverExit"
      },
      onRowSelection: {
        title: "Enable onRowSelection",
        type: "boolean",
        name: "onRowSelection"
      },
      preScanRows: {
        type: "boolean",
        name: "preScanRows",
        "default": false
      },
      selectable: {
        type: "boolean",
        name: "selectable",
        "default": false
      },
      showRowHover: {
        type: "boolean",
        name: "showRowHover"
      },
      stripedRows: {
        type: "boolean",
        name: "stripedRows"
      },
      style: {
        type: "object",
        name: "style",
        "default": {}
      }
    },
    output: {
      component: {
        title: "TableBody",
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
      onRowHover: {
        type: "any"
      },
      onRowHoverExit: {
        type: "any"
      },
      onRowSelection: {
        type: "any"
      }
    }
  }
}