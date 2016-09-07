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
        name: "muiTheme"
      },
      show: {
        type: "boolean",
        name: "show",
        "default": false
      },
      style: {
        type: "object",
        name: "style"
      },
      text: {
        type: "node",
        name: "text"
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