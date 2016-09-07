module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Table/Table": require('material-ui/Table/Table')
    }
  },
  name: "Table",
  ports: {
    input: {
      allRowsSelected: {
        type: "boolean",
        name: "allRowsSelected",
        "default": false
      },
      bodyStyle: {
        type: "object",
        name: "bodyStyle"
      },
      children: {
        type: "node",
        name: "children"
      },
      className: {
        type: "string",
        name: "className"
      },
      fixedFooter: {
        type: "boolean",
        name: "fixedFooter",
        "default": false
      },
      fixedHeader: {
        type: "boolean",
        name: "fixedHeader",
        "default": false
      },
      footerStyle: {
        type: "object",
        name: "footerStyle"
      },
      headerStyle: {
        type: "object",
        name: "headerStyle"
      },
      height: {
        type: "string",
        name: "height",
        "default": ""
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
      selectable: {
        type: "boolean",
        name: "selectable",
        "default": false
      },
      style: {
        type: "object",
        name: "style"
      },
      wrapperStyle: {
        type: "object",
        name: "wrapperStyle"
      }
    },
    output: {
      component: {
        title: "Table",
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