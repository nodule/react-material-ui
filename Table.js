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
        name: "bodyStyle",
        required: false
      },
      children: {
        type: "array",
        propType: "node",
        name: "children",
        required: false
      },
      className: {
        type: "string",
        name: "className",
        required: false
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
        name: "footerStyle",
        required: false
      },
      headerStyle: {
        type: "object",
        name: "headerStyle",
        required: false
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
      onRowSelection: {
        title: "Enable onRowSelection",
        type: "boolean",
        name: "onRowSelection",
        required: false
      },
      selectable: {
        type: "boolean",
        name: "selectable",
        "default": false
      },
      style: {
        type: "object",
        name: "style",
        required: false
      },
      wrapperStyle: {
        type: "object",
        name: "wrapperStyle",
        required: false
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