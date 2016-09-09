module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/TextField/TextFieldHint": require('material-ui/TextField/TextFieldHint')
    }
  },
  name: "TextFieldHint",
  ports: {
    input: {
      muiTheme: {
        type: "object",
        name: "muiTheme",
        required: true
      },
      show: {
        type: "boolean",
        name: "show",
        "default": false
      },
      style: {
        type: "object",
        name: "style",
        required: false
      },
      text: {
        type: "node",
        name: "text",
        required: false
      }
    },
    output: {
      component: {
        title: "TextFieldHint",
        type: "Component"
      }
    }
  }
}