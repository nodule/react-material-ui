module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/internal/FocusRipple": require('material-ui/internal/FocusRipple')
    }
  },
  name: "FocusRipple",
  ports: {
    input: {
      color: {
        type: "string",
        name: "color"
      },
      innerStyle: {
        type: "object",
        name: "innerStyle"
      },
      opacity: {
        type: "number",
        name: "opacity"
      },
      show: {
        type: "boolean",
        name: "show"
      },
      style: {
        type: "object",
        name: "style"
      }
    },
    output: {
      component: {
        title: "FocusRipple",
        type: "Component"
      }
    }
  }
}