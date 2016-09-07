module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Table/TableHeaderColumn": require('material-ui/Table/TableHeaderColumn')
    }
  },
  name: "TableHeaderColumn",
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
        name: "hoverable"
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
      },
      tooltip: {
        type: "string",
        name: "tooltip"
      },
      tooltipStyle: {
        type: "object",
        name: "tooltipStyle"
      }
    },
    output: {
      component: {
        title: "TableHeaderColumn",
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