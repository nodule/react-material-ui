module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/internal/Tooltip": require('material-ui/internal/Tooltip')
    }
  },
  name: "Tooltip",
  ports: {
    input: {
      className: {
        type: "string",
        name: "className"
      },
      horizontalPosition: {
        type: "enum",
        name: "horizontalPosition"
      },
      label: {
        type: "node",
        name: "label"
      },
      show: {
        type: "boolean",
        name: "show"
      },
      style: {
        type: "object",
        name: "style"
      },
      touch: {
        type: "boolean",
        name: "touch"
      },
      verticalPosition: {
        type: "enum",
        name: "verticalPosition"
      }
    },
    output: {
      component: {
        title: "Tooltip",
        type: "Component"
      }
    }
  }
}