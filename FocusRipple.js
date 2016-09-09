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
        name: "color",
        required: false
      },
      innerStyle: {
        type: "object",
        name: "innerStyle",
        required: false
      },
      opacity: {
        type: "number",
        name: "opacity",
        required: false
      },
      show: {
        type: "boolean",
        name: "show",
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
        title: "FocusRipple",
        type: "Component"
      }
    }
  }
}