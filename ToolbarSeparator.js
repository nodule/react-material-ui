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
        name: "className"
      },
      style: {
        type: "object",
        name: "style"
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