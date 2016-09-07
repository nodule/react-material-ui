module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Toolbar/ToolbarGroup": require('material-ui/Toolbar/ToolbarGroup')
    }
  },
  name: "ToolbarGroup",
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
      firstChild: {
        type: "boolean",
        name: "firstChild",
        "default": false
      },
      lastChild: {
        type: "boolean",
        name: "lastChild",
        "default": false
      },
      style: {
        type: "object",
        name: "style"
      }
    },
    output: {
      component: {
        title: "ToolbarGroup",
        type: "Component"
      }
    }
  }
}