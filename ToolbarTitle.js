module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Toolbar/ToolbarTitle": require('material-ui/Toolbar/ToolbarTitle')
    }
  },
  name: "ToolbarTitle",
  ports: {
    input: {
      className: {
        type: "string",
        name: "className"
      },
      style: {
        type: "object",
        name: "style"
      },
      text: {
        type: "string",
        name: "text"
      }
    },
    output: {
      component: {
        title: "ToolbarTitle",
        type: "Component"
      }
    }
  }
}