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
        name: "className",
        required: false
      },
      horizontalPosition: {
        type: "enum",
        name: "horizontalPosition",
        required: false
      },
      label: {
        type: "node",
        name: "label",
        required: true
      },
      show: {
        type: "boolean",
        name: "show",
        required: false
      },
      style: {
        type: "object",
        name: "style",
        required: false
      },
      touch: {
        type: "boolean",
        name: "touch",
        required: false
      },
      verticalPosition: {
        type: "enum",
        name: "verticalPosition",
        required: false
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