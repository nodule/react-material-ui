module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/internal/CircleRipple": require('material-ui/internal/CircleRipple')
    }
  },
  name: "CircleRipple",
  ports: {
    input: {
      aborted: {
        type: "boolean",
        name: "aborted",
        "default": false
      },
      color: {
        type: "string",
        name: "color"
      },
      opacity: {
        type: "number",
        name: "opacity",
        "default": 0
      },
      style: {
        type: "object",
        name: "style"
      },
      touchGenerated: {
        type: "boolean",
        name: "touchGenerated"
      }
    },
    output: {
      component: {
        title: "CircleRipple",
        type: "Component"
      }
    }
  }
}