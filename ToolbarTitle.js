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
        name: "className",
        required: false
      },
      style: {
        type: "object",
        name: "style",
        required: false
      },
      text: {
        type: "string",
        name: "text",
        required: false
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