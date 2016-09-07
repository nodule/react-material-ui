module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/TextField/TextFieldUnderline": require('material-ui/TextField/TextFieldUnderline')
    }
  },
  name: "TextFieldUnderline",
  ports: {
    input: {
      disabled: {
        type: "boolean",
        name: "disabled",
        "default": false
      },
      disabledStyle: {
        type: "object",
        name: "disabledStyle",
        "default": {}
      },
      error: {
        type: "boolean",
        name: "error",
        "default": false
      },
      errorStyle: {
        type: "object",
        name: "errorStyle",
        "default": {}
      },
      focus: {
        type: "boolean",
        name: "focus",
        "default": false
      },
      focusStyle: {
        type: "object",
        name: "focusStyle",
        "default": {}
      },
      muiTheme: {
        type: "object",
        name: "muiTheme"
      },
      style: {
        type: "object",
        name: "style",
        "default": {}
      }
    },
    output: {
      component: {
        title: "TextFieldUnderline",
        type: "Component"
      }
    }
  }
}