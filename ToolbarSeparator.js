module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Toolbar/ToolbarSeparator": require('material-ui/Toolbar/ToolbarSeparator')
    }
  },
  name: "ToolbarSeparator",
  ports: {
    input: {
      className: {
        type: "string",
        name: "className",
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
        title: "ToolbarSeparator",
        type: "Component"
      }
    }
  }
}