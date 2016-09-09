module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/TextField/TextFieldLabel": require('material-ui/TextField/TextFieldLabel')
    }
  },
  name: "TextFieldLabel",
  ports: {
    input: {
      children: {
        type: "node",
        name: "children",
        required: false
      },
      className: {
        type: "string",
        name: "className",
        required: false
      },
      disabled: {
        type: "boolean",
        name: "disabled",
        "default": false
      },
      htmlFor: {
        type: "string",
        name: "htmlFor",
        required: false
      },
      muiTheme: {
        type: "object",
        name: "muiTheme",
        required: true
      },
      onTouchTap: {
        title: "Enable onTouchTap",
        type: "boolean",
        name: "onTouchTap",
        required: false
      },
      shrink: {
        type: "boolean",
        name: "shrink",
        "default": false
      },
      shrinkStyle: {
        type: "object",
        name: "shrinkStyle",
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
        title: "TextFieldLabel",
        type: "Component"
      },
      onTouchTap: {
        type: "any"
      }
    }
  }
}