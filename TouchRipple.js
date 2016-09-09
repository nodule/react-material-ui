module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/internal/TouchRipple": require('material-ui/internal/TouchRipple')
    }
  },
  name: "TouchRipple",
  ports: {
    input: {
      abortOnScroll: {
        type: "boolean",
        name: "abortOnScroll",
        "default": false
      },
      centerRipple: {
        type: "boolean",
        name: "centerRipple",
        required: false
      },
      children: {
        type: "node",
        name: "children",
        required: false
      },
      color: {
        type: "string",
        name: "color",
        required: false
      },
      opacity: {
        type: "number",
        name: "opacity",
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
        title: "TouchRipple",
        type: "Component"
      }
    }
  }
}