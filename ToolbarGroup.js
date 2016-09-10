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
        name: "style",
        required: false
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