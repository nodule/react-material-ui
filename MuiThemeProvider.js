module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/styles/MuiThemeProvider": require('material-ui/styles/MuiThemeProvider')
    }
  },
  name: "MuiThemeProvider",
  ports: {
    input: {
      children: {
        type: "element",
        name: "children",
        required: false
      },
      muiTheme: {
        type: "object",
        name: "muiTheme",
        required: false
      }
    },
    output: {
      component: {
        title: "MuiThemeProvider",
        type: "Component"
      }
    }
  }
}