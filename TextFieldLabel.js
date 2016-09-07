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
        name: "children"
      },
      className: {
        type: "string",
        name: "className"
      },
      disabled: {
        type: "boolean",
        name: "disabled",
        "default": false
      },
      htmlFor: {
        type: "string",
        name: "htmlFor"
      },
      muiTheme: {
        type: "object",
        name: "muiTheme"
      },
      onTouchTap: {
        title: "Enable onTouchTap",
        type: "boolean",
        name: "onTouchTap"
      },
      shrink: {
        type: "boolean",
        name: "shrink",
        "default": false
      },
      shrinkStyle: {
        type: "object",
        name: "shrinkStyle"
      },
      style: {
        type: "object",
        name: "style"
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